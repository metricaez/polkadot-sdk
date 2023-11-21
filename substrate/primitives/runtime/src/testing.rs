// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Testing utilities.

use crate::{
	codec::{Codec, Decode, Encode, MaxEncodedLen},
	generic,
	scale_info::TypeInfo,
	traits::{
		self, Applyable, BlakeTwo256, Checkable, DispatchInfoOf, Dispatchable, OpaqueKeys,
		PostDispatchInfoOf, SignaturePayload, TransactionExtension, ValidateUnsigned, DispatchTransaction,
	},
	transaction_validity::{TransactionSource, TransactionValidity, TransactionValidityError},
	ApplyExtrinsicResultWithInfo, KeyTypeId,
};
use serde::{de::Error as DeError, Deserialize, Deserializer, Serialize, Serializer};
use sp_core::{
	crypto::{key_types, ByteArray, CryptoType, Dummy},
	U256,
};
pub use sp_core::{sr25519, H256};
use std::{
	cell::RefCell,
	fmt::{self, Debug},
	ops::Deref,
};

/// A dummy type which can be used instead of regular cryptographic primitives.
///
/// 1. Wraps a `u64` `AccountId` and is able to `IdentifyAccount`.
/// 2. Can be converted to any `Public` key.
/// 3. Implements `RuntimeAppPublic` so it can be used instead of regular application-specific
///    crypto.
#[derive(
	Default,
	PartialEq,
	Eq,
	Clone,
	Encode,
	Decode,
	Debug,
	Hash,
	Serialize,
	Deserialize,
	PartialOrd,
	Ord,
	MaxEncodedLen,
	TypeInfo,
)]
pub struct UintAuthorityId(pub u64);

impl From<u64> for UintAuthorityId {
	fn from(id: u64) -> Self {
		UintAuthorityId(id)
	}
}

impl From<UintAuthorityId> for u64 {
	fn from(id: UintAuthorityId) -> u64 {
		id.0
	}
}

impl UintAuthorityId {
	/// Convert this authority ID into a public key.
	pub fn to_public_key<T: ByteArray>(&self) -> T {
		let bytes: [u8; 32] = U256::from(self.0).into();
		T::from_slice(&bytes).unwrap()
	}
}

impl CryptoType for UintAuthorityId {
	type Pair = Dummy;
}

impl AsRef<[u8]> for UintAuthorityId {
	fn as_ref(&self) -> &[u8] {
		// Unsafe, i know, but it's test code and it's just there because it's really convenient to
		// keep `UintAuthorityId` as a u64 under the hood.
		unsafe {
			std::slice::from_raw_parts(
				&self.0 as *const u64 as *const _,
				std::mem::size_of::<u64>(),
			)
		}
	}
}

thread_local! {
	/// A list of all UintAuthorityId keys returned to the runtime.
	static ALL_KEYS: RefCell<Vec<UintAuthorityId>> = RefCell::new(vec![]);
}

impl UintAuthorityId {
	/// Set the list of keys returned by the runtime call for all keys of that type.
	pub fn set_all_keys<T: Into<UintAuthorityId>>(keys: impl IntoIterator<Item = T>) {
		ALL_KEYS.with(|l| *l.borrow_mut() = keys.into_iter().map(Into::into).collect())
	}
}

impl sp_application_crypto::RuntimeAppPublic for UintAuthorityId {
	const ID: KeyTypeId = key_types::DUMMY;

	type Signature = TestSignature;

	fn all() -> Vec<Self> {
		ALL_KEYS.with(|l| l.borrow().clone())
	}

	fn generate_pair(_: Option<Vec<u8>>) -> Self {
		use rand::RngCore;
		UintAuthorityId(rand::thread_rng().next_u64())
	}

	fn sign<M: AsRef<[u8]>>(&self, msg: &M) -> Option<Self::Signature> {
		Some(TestSignature(self.0, msg.as_ref().to_vec()))
	}

	fn verify<M: AsRef<[u8]>>(&self, msg: &M, signature: &Self::Signature) -> bool {
		traits::Verify::verify(signature, msg.as_ref(), &self.0)
	}

	fn to_raw_vec(&self) -> Vec<u8> {
		AsRef::<[u8]>::as_ref(self).to_vec()
	}
}

impl OpaqueKeys for UintAuthorityId {
	type KeyTypeIdProviders = ();

	fn key_ids() -> &'static [KeyTypeId] {
		&[key_types::DUMMY]
	}

	fn get_raw(&self, _: KeyTypeId) -> &[u8] {
		self.as_ref()
	}

	fn get<T: Decode>(&self, _: KeyTypeId) -> Option<T> {
		self.using_encoded(|mut x| T::decode(&mut x)).ok()
	}
}

impl traits::IdentifyAccount for UintAuthorityId {
	type AccountId = u64;

	fn into_account(self) -> Self::AccountId {
		self.0
	}
}

/// A dummy signature type, to match `UintAuthorityId`.
#[derive(Eq, PartialEq, Clone, Debug, Hash, Serialize, Deserialize, Encode, Decode, TypeInfo)]
pub struct TestSignature(pub u64, pub Vec<u8>);

impl traits::Verify for TestSignature {
	type Signer = UintAuthorityId;

	fn verify<L: traits::Lazy<[u8]>>(&self, mut msg: L, signer: &u64) -> bool {
		signer == &self.0 && msg.get() == &self.1[..]
	}
}

/// Digest item
pub type DigestItem = generic::DigestItem;

/// Header Digest
pub type Digest = generic::Digest;

/// Block Header
pub type Header = generic::Header<u64, BlakeTwo256>;

impl Header {
	/// A new header with the given number and default hash for all other fields.
	pub fn new_from_number(number: <Self as traits::Header>::Number) -> Self {
		Self {
			number,
			extrinsics_root: Default::default(),
			state_root: Default::default(),
			parent_hash: Default::default(),
			digest: Default::default(),
		}
	}
}

// TODO: Remove this type and just use the regular tx types.

/// An opaque extrinsic wrapper type.
#[derive(PartialEq, Eq, Clone, Debug, Encode, Decode)]
pub struct ExtrinsicWrapper<Xt>(Xt);

impl<Xt> traits::Extrinsic for ExtrinsicWrapper<Xt> {
	type Call = ();
	type SignaturePayload = ();

	fn is_bare(&self) -> bool {
		false
	}
}

impl<Xt: Encode> serde::Serialize for ExtrinsicWrapper<Xt> {
	fn serialize<S>(&self, seq: S) -> Result<S::Ok, S::Error>
	where
		S: ::serde::Serializer,
	{
		self.using_encoded(|bytes| seq.serialize_bytes(bytes))
	}
}

impl<Xt> From<Xt> for ExtrinsicWrapper<Xt> {
	fn from(xt: Xt) -> Self {
		ExtrinsicWrapper(xt)
	}
}

impl<Xt> Deref for ExtrinsicWrapper<Xt> {
	type Target = Xt;

	fn deref(&self) -> &Self::Target {
		&self.0
	}
}

/// Testing block
#[derive(PartialEq, Eq, Clone, Serialize, Debug, Encode, Decode, TypeInfo)]
pub struct Block<Xt> {
	/// Block header
	pub header: Header,
	/// List of extrinsics
	pub extrinsics: Vec<Xt>,
}

impl<Xt> traits::HeaderProvider for Block<Xt> {
	type HeaderT = Header;
}

impl<
		Xt: 'static + Codec + Sized + Send + Sync + Serialize + Clone + Eq + Debug + traits::Extrinsic,
	> traits::Block for Block<Xt>
{
	type Extrinsic = Xt;
	type Header = Header;
	type Hash = <Header as traits::Header>::Hash;

	fn header(&self) -> &Self::Header {
		&self.header
	}
	fn extrinsics(&self) -> &[Self::Extrinsic] {
		&self.extrinsics[..]
	}
	fn deconstruct(self) -> (Self::Header, Vec<Self::Extrinsic>) {
		(self.header, self.extrinsics)
	}
	fn new(header: Self::Header, extrinsics: Vec<Self::Extrinsic>) -> Self {
		Block { header, extrinsics }
	}
	fn encode_from(header: &Self::Header, extrinsics: &[Self::Extrinsic]) -> Vec<u8> {
		(header, extrinsics).encode()
	}
}

impl<'a, Xt> Deserialize<'a> for Block<Xt>
where
	Block<Xt>: Decode,
{
	fn deserialize<D: Deserializer<'a>>(de: D) -> Result<Self, D::Error> {
		let r = <Vec<u8>>::deserialize(de)?;
		Decode::decode(&mut &r[..])
			.map_err(|e| DeError::custom(format!("Invalid value passed into decode: {}", e)))
	}
}

/// The signature payload of a `TestXt`.
type TxSignaturePayload<Extra> = (u64, Extra);

impl<Extra: TypeInfo> SignaturePayload for TxSignaturePayload<Extra> {
	type SignatureAddress = u64;
	type Signature = ();
	type SignatureExtra = Extra;
}

// TODO: Remove this completely - just use the regular tx types.
// TODO: Meantime, if removal is too much work, rename `fn new` into `fn new_inherent` and
//   `fn new_signed_transaction`.

/// Test transaction, tuple of (sender, call, signed_extra)
/// with index only used if sender is some.
///
/// If sender is some then the transaction is signed otherwise it is unsigned.
#[derive(PartialEq, Eq, Clone, Encode, Decode, TypeInfo)]
pub struct TestXt<Call, Extension> {
	/// Signature of the extrinsic.
	pub signature: Option<TxSignaturePayload<Extension>>,
	/// Call of the extrinsic.
	pub call: Call,
}

impl<Call, Extension> TestXt<Call, Extension> {
	/// Create a new `TextXt`.
	#[deprecated = "Use `new_inherent` or `new_signed` instead"]
	pub fn new(call: Call, signature: Option<(u64, Extension)>) -> Self {
		Self { call, signature }
	}

	/// Create a new inherent `TextXt`.
	pub fn new_inherent(call: Call) -> Self {
		Self { call, signature: None }
	}

	/// Create a new signed transaction `TextXt`.
	pub fn new_signed(call: Call, who: u64, ext: Extension) -> Self {
		Self { call, signature: Some((who, ext)) }
	}
}

impl<Call, Extension> Serialize for TestXt<Call, Extension>
where
	TestXt<Call, Extension>: Encode,
{
	fn serialize<S>(&self, seq: S) -> Result<S::Ok, S::Error>
	where
		S: Serializer,
	{
		self.using_encoded(|bytes| seq.serialize_bytes(bytes))
	}
}

impl<Call, Extension> Debug for TestXt<Call, Extension> {
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
		write!(f, "TestXt({:?}, ...)", self.signature.as_ref().map(|x| &x.0))
	}
}

impl<Call: Codec + Sync + Send, Context, Extension> Checkable<Context> for TestXt<Call, Extension> {
	type Checked = Self;
	fn check(self, _: &Context) -> Result<Self::Checked, TransactionValidityError> {
		Ok(self)
	}

	#[cfg(feature = "try-runtime")]
	fn unchecked_into_checked_i_know_what_i_am_doing(
		self,
		_: &Context,
	) -> Result<Self::Checked, TransactionValidityError> {
		unreachable!()
	}
}

// TODO: Remove
impl<Call: Codec + Sync + Send + TypeInfo, Extension: TypeInfo> traits::Extrinsic
	for TestXt<Call, Extension>
{
	type Call = Call;
	type SignaturePayload = TxSignaturePayload<Extension>;

	fn is_bare(&self) -> bool {
		!self.signature.is_some()
	}

	fn new(c: Call, sig: Option<Self::SignaturePayload>) -> Option<Self> {
		Some(TestXt { signature: sig, call: c })
	}
}

impl<Call, Extension> traits::ExtrinsicMetadata for TestXt<Call, Extension>
where
	Call: Codec + Sync + Send,
	Extension: TransactionExtension<Call = Call>,
{
	// TODO: metadata-v16: Rename to `Extension`
	type Extra = Extension;
	const VERSION: u8 = 0u8;
}

// TODO: remove this in favour of real transactions.
impl<Origin, Call, Extension> Applyable for TestXt<Call, Extension>
where
	Call: 'static
		+ Sized
		+ Send
		+ Sync
		+ Clone
		+ Eq
		+ Codec
		+ Debug
		+ Dispatchable<RuntimeOrigin = Origin>,
	Extension: TransactionExtension<Call = Call>,
	Origin: From<Option<u64>>,
{
	type Call = Call;

	/// Checks to see if this is a valid *transaction*. It returns information on it if so.
	fn validate<U: ValidateUnsigned<Call = Self::Call>>(
		&self,
		source: TransactionSource,
		info: &DispatchInfoOf<Self::Call>,
		len: usize,
	) -> TransactionValidity {
		if let Some((ref id, ref ext)) = self.signature {
			ext.validate_only(Some(id.clone()).into(), &self.call, info, len).map(|x| x.0)
		} else {
			#[allow(deprecated)]
			let valid = Extension::validate_bare_compat(&self.call, info, len)?;
			let unsigned_validation = U::validate_unsigned(source, &self.call)?;
			Ok(valid.combine_with(unsigned_validation))
		}
	}

	/// Executes all necessary logic needed prior to dispatch and deconstructs into function call,
	/// index and sender.
	fn apply<U: ValidateUnsigned<Call = Self::Call>>(
		self,
		info: &DispatchInfoOf<Self::Call>,
		len: usize,
	) -> ApplyExtrinsicResultWithInfo<PostDispatchInfoOf<Self::Call>> {
		if let Some((who, extra)) = self.signature {
			extra.dispatch_transaction(Some(who).into(), self.call, info, len)
		} else {
			#[allow(deprecated)]
			Extension::pre_dispatch_bare_compat(&self.call, info, len)?;
			U::pre_dispatch(&self.call)?;
			Ok(self.call.dispatch(None.into()))
		}
	}
}
