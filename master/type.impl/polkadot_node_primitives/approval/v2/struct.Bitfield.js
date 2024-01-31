(function() {var type_impls = {
"polkadot_node_primitives":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#259-300\">source</a><a href=\"#impl-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.bit_at\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#262-268\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html#tymethod.bit_at\" class=\"fn\">bit_at</a>(&amp;self, index: <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.BitIndex.html\" title=\"struct polkadot_node_primitives::approval::v2::BitIndex\">BitIndex</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns the bit value at specified <code>index</code>. If <code>index</code> is greater than bitfield size,\nreturns <code>false</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#271-273\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns number of bits.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.count_ones\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#276-278\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html#tymethod.count_ones\" class=\"fn\">count_ones</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of 1 bits.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.first_one\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#281-283\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html#tymethod.first_one\" class=\"fn\">first_one</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the index of the first 1 bit.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter_ones\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#286-288\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html#tymethod.iter_ones\" class=\"fn\">iter_ones</a>(&amp;self) -&gt; IterOnes&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>, Lsb0&gt;</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over inner bits.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#297-299\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; BitVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>, Lsb0&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the inner bitfield and consumes <code>self</code>.</p>\n</div></details></div></details>",0,"polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<section id=\"impl-StructuralPartialEq-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-StructuralPartialEq-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section>","StructuralPartialEq","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-Decode-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Decode for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: Decode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CVec%3CT%3E%3E-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#336-361\">source</a><a href=\"#impl-TryFrom%3CVec%3CT%3E%3E-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"polkadot_node_primitives/approval/v2/enum.BitfieldError.html\" title=\"enum polkadot_node_primitives::approval::v2::BitfieldError\">BitfieldError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#342-360\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(value: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<Vec<T>>","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-Hash-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<section id=\"impl-Eq-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-Eq-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section>","Eq","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<section id=\"impl-EncodeLike-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-EncodeLike-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; EncodeLike for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: Encode,</span></h3></section>","EncodeLike","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-Clone-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-Debug-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#320-334\">source</a><a href=\"#impl-From%3CT%3E-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polkadot_node_primitives/approval/v2/trait.AsBitIndex.html\" title=\"trait polkadot_node_primitives::approval::v2::AsBitIndex\">AsBitIndex</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#324-333\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: T) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-Encode-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Encode for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-PartialEq-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"],["<section id=\"impl-StructuralEq-for-Bitfield%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_primitives/approval.rs.html#233\">source</a><a href=\"#impl-StructuralEq-for-Bitfield%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"polkadot_node_primitives/approval/v2/struct.Bitfield.html\" title=\"struct polkadot_node_primitives::approval::v2::Bitfield\">Bitfield</a>&lt;T&gt;</h3></section>","StructuralEq","polkadot_node_primitives::approval::v2::CandidateBitfield","polkadot_node_primitives::approval::v2::CoreBitfield"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()