(function() {var type_impls = {
"westend_system_emulated_network":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fund_accounts\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">fund_accounts</a>(\n    accounts: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u128.html\">u128</a>)&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Fund a set of accounts with a balance</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fund_para_sovereign\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">fund_para_sovereign</a>(sibling_para_id: <a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Id.html\" title=\"struct polkadot_parachain_primitives::primitives::Id\">Id</a>, balance: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u128.html\">u128</a>)</h4></section></summary><div class=\"docblock\"><p>Fund a sovereign account of sibling para.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sovereign_account_of_parachain_on_other_global_consensus\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">sovereign_account_of_parachain_on_other_global_consensus</a>(\n    network_id: <a class=\"enum\" href=\"staging_xcm/v4/junction/enum.NetworkId.html\" title=\"enum staging_xcm::v4::junction::NetworkId\">NetworkId</a>,\n    para_id: <a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Id.html\" title=\"struct polkadot_parachain_primitives::primitives::Id\">Id</a>\n) -&gt; &lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a></h4></section></summary><div class=\"docblock\"><p>Return local sovereign account of <code>para_id</code> on other <code>network_id</code></p>\n</div></details></div></details>",0,"westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_xcm_pallet_attempted_complete\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_xcm_pallet_attempted_complete</a>(expected_weight: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Asserts a dispatchable is completely executed and XCM sent</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_xcm_pallet_attempted_incomplete\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_xcm_pallet_attempted_incomplete</a>(\n    expected_weight: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>&gt;,\n    expected_error: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Asserts a dispatchable is incompletely executed and XCM sent</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_xcm_pallet_attempted_error\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_xcm_pallet_attempted_error</a>(expected_error: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Asserts a dispatchable throws and error when trying to be sent</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_xcm_pallet_sent\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_xcm_pallet_sent</a>()</h4></section></summary><div class=\"docblock\"><p>Asserts a XCM message is sent</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_parachain_system_ump_sent\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_parachain_system_ump_sent</a>()</h4></section></summary><div class=\"docblock\"><p>Asserts a XCM message is sent to Relay Chain</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_dmp_queue_complete\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_dmp_queue_complete</a>(expected_weight: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Asserts a XCM from Relay Chain is completely executed</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_dmp_queue_incomplete\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_dmp_queue_incomplete</a>(expected_weight: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Asserts a XCM from Relay Chain is incompletely executed</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_dmp_queue_error\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_dmp_queue_error</a>()</h4></section></summary><div class=\"docblock\"><p>Asserts a XCM from Relay Chain is executed with error</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_xcmp_queue_success\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">assert_xcmp_queue_success</a>(expected_weight: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Asserts a XCM from another Parachain is completely executed</p>\n</div></details></div></details>",0,"westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestExt-for-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-TestExt-for-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"xcm_emulator/trait.TestExt.html\" title=\"trait xcm_emulator::TestExt\">TestExt</a> for CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.build_new_ext\" class=\"method trait-impl\"><a href=\"#method.build_new_ext\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.build_new_ext\" class=\"fn\">build_new_ext</a>(storage: <a class=\"struct\" href=\"sp_storage/struct.Storage.html\" title=\"struct sp_storage::Storage\">Storage</a>) -&gt; <a class=\"struct\" href=\"sp_state_machine/testing/struct.TestExternalities.html\" title=\"struct sp_state_machine::testing::TestExternalities\">TestExternalities</a>&lt;<a class=\"struct\" href=\"sp_core/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct sp_core::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;</h4></section><section id=\"method.new_ext\" class=\"method trait-impl\"><a href=\"#method.new_ext\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.new_ext\" class=\"fn\">new_ext</a>() -&gt; <a class=\"struct\" href=\"sp_state_machine/testing/struct.TestExternalities.html\" title=\"struct sp_state_machine::testing::TestExternalities\">TestExternalities</a>&lt;<a class=\"struct\" href=\"sp_core/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct sp_core::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;</h4></section><section id=\"method.move_ext_out\" class=\"method trait-impl\"><a href=\"#method.move_ext_out\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.move_ext_out\" class=\"fn\">move_ext_out</a>(id: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>)</h4></section><section id=\"method.move_ext_in\" class=\"method trait-impl\"><a href=\"#method.move_ext_in\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.move_ext_in\" class=\"fn\">move_ext_in</a>(id: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>)</h4></section><section id=\"method.reset_ext\" class=\"method trait-impl\"><a href=\"#method.reset_ext\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.reset_ext\" class=\"fn\">reset_ext</a>()</h4></section><section id=\"method.execute_with\" class=\"method trait-impl\"><a href=\"#method.execute_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.execute_with\" class=\"fn\">execute_with</a>&lt;R&gt;(execute: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; R) -&gt; R</h4></section><section id=\"method.ext_wrapper\" class=\"method trait-impl\"><a href=\"#method.ext_wrapper\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.TestExt.html#tymethod.ext_wrapper\" class=\"fn\">ext_wrapper</a>&lt;R&gt;(func: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; R) -&gt; R</h4></section></div></details>","TestExt","westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CheckAssertion%3COrigin,+Destination,+Hops,+Args%3E-for-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-CheckAssertion%3COrigin,+Destination,+Hops,+Args%3E-for-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N, Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"xcm_emulator/trait.CheckAssertion.html\" title=\"trait xcm_emulator::CheckAssertion\">CheckAssertion</a>&lt;Origin, Destination, Hops, Args&gt; for CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,\n    Origin: <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Destination: <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;Origin as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type xcm_emulator::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = &lt;&lt;Origin as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;Destination as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type xcm_emulator::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&lt;AccountId = &lt;&lt;Destination as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.check_assertion\" class=\"method trait-impl\"><a href=\"#method.check_assertion\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.CheckAssertion.html#tymethod.check_assertion\" class=\"fn\">check_assertion</a>(test: <a class=\"struct\" href=\"xcm_emulator/struct.Test.html\" title=\"struct xcm_emulator::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;)</h4></section></div></details>","CheckAssertion<Origin, Destination, Hops, Args>","westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parachain-for-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-Parachain-for-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"xcm_emulator/trait.Parachain.html\" title=\"trait xcm_emulator::Parachain\">Parachain</a> for CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.XcmpMessageHandler\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.XcmpMessageHandler\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Parachain.html#associatedtype.XcmpMessageHandler\" class=\"associatedtype\">XcmpMessageHandler</a> = <a class=\"struct\" href=\"cumulus_pallet_xcmp_queue/pallet/struct.Pallet.html\" title=\"struct cumulus_pallet_xcmp_queue::pallet::Pallet\">Pallet</a>&lt;Runtime&gt;</h4></section><section id=\"associatedtype.LocationToAccountId\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.LocationToAccountId\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Parachain.html#associatedtype.LocationToAccountId\" class=\"associatedtype\">LocationToAccountId</a> = (<a class=\"struct\" href=\"staging_xcm_builder/location_conversion/struct.ParentIsPreset.html\" title=\"struct staging_xcm_builder::location_conversion::ParentIsPreset\">ParentIsPreset</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;, <a class=\"struct\" href=\"staging_xcm_builder/location_conversion/struct.SiblingParachainConvertsVia.html\" title=\"struct staging_xcm_builder::location_conversion::SiblingParachainConvertsVia\">SiblingParachainConvertsVia</a>&lt;<a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Sibling.html\" title=\"struct polkadot_parachain_primitives::primitives::Sibling\">Sibling</a>, &lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;, <a class=\"struct\" href=\"staging_xcm_builder/location_conversion/struct.AccountId32Aliases.html\" title=\"struct staging_xcm_builder::location_conversion::AccountId32Aliases\">AccountId32Aliases</a>&lt;RelayNetwork, &lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;)</h4></section><section id=\"associatedtype.ParachainSystem\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ParachainSystem\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Parachain.html#associatedtype.ParachainSystem\" class=\"associatedtype\">ParachainSystem</a> = <a class=\"struct\" href=\"cumulus_pallet_parachain_system/pallet/struct.Pallet.html\" title=\"struct cumulus_pallet_parachain_system::pallet::Pallet\">Pallet</a>&lt;&lt;CollectivesWestend&lt;N&gt; as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>&gt;</h4></section><section id=\"associatedtype.ParachainInfo\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ParachainInfo\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Parachain.html#associatedtype.ParachainInfo\" class=\"associatedtype\">ParachainInfo</a> = <a class=\"struct\" href=\"staging_parachain_info/pallet/struct.Pallet.html\" title=\"struct staging_parachain_info::pallet::Pallet\">Pallet</a>&lt;Runtime&gt;</h4></section><section id=\"associatedtype.MessageProcessor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.MessageProcessor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Parachain.html#associatedtype.MessageProcessor\" class=\"associatedtype\">MessageProcessor</a> = <a class=\"struct\" href=\"xcm_emulator/struct.DefaultParaMessageProcessor.html\" title=\"struct xcm_emulator::DefaultParaMessageProcessor\">DefaultParaMessageProcessor</a>&lt;CollectivesWestend&lt;N&gt;, <a class=\"enum\" href=\"cumulus_primitives_core/enum.AggregateMessageOrigin.html\" title=\"enum cumulus_primitives_core::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;</h4></section><section id=\"method.init\" class=\"method trait-impl\"><a href=\"#method.init\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#tymethod.init\" class=\"fn\">init</a>()</h4></section><section id=\"method.new_block\" class=\"method trait-impl\"><a href=\"#method.new_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#tymethod.new_block\" class=\"fn\">new_block</a>()</h4></section><section id=\"method.finalize_block\" class=\"method trait-impl\"><a href=\"#method.finalize_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#tymethod.finalize_block\" class=\"fn\">finalize_block</a>()</h4></section><section id=\"method.set_last_head\" class=\"method trait-impl\"><a href=\"#method.set_last_head\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#tymethod.set_last_head\" class=\"fn\">set_last_head</a>()</h4></section><section id=\"method.para_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_emulator/lib.rs.html#260\">source</a><a href=\"#method.para_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#method.para_id\" class=\"fn\">para_id</a>() -&gt; <a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Id.html\" title=\"struct polkadot_parachain_primitives::primitives::Id\">Id</a></h4></section><section id=\"method.parent_location\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_emulator/lib.rs.html#264\">source</a><a href=\"#method.parent_location\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#method.parent_location\" class=\"fn\">parent_location</a>() -&gt; <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a></h4></section><section id=\"method.sibling_location_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_emulator/lib.rs.html#268\">source</a><a href=\"#method.sibling_location_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#method.sibling_location_of\" class=\"fn\">sibling_location_of</a>(para_id: <a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Id.html\" title=\"struct polkadot_parachain_primitives::primitives::Id\">Id</a>) -&gt; <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a></h4></section><section id=\"method.sovereign_account_id_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_emulator/lib.rs.html#272\">source</a><a href=\"#method.sovereign_account_id_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Parachain.html#method.sovereign_account_id_of\" class=\"fn\">sovereign_account_id_of</a>(\n    location: <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>\n) -&gt; &lt;Self::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a></h4></section></div></details>","Parachain","westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-Clone-for-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; CollectivesWestend&lt;N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CollectivesWestendParaPallet-for-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-CollectivesWestendParaPallet-for-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; CollectivesWestendParaPallet for CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.PolkadotXcm\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PolkadotXcm\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">PolkadotXcm</a> = <a class=\"struct\" href=\"pallet_xcm/pallet/struct.Pallet.html\" title=\"struct pallet_xcm::pallet::Pallet\">Pallet</a>&lt;Runtime&gt;</h4></section><section id=\"associatedtype.Balances\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Balances\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Balances</a> = <a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;Runtime&gt;</h4></section><section id=\"associatedtype.FellowshipTreasury\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.FellowshipTreasury\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">FellowshipTreasury</a> = <a class=\"struct\" href=\"pallet_treasury/pallet/struct.Pallet.html\" title=\"struct pallet_treasury::pallet::Pallet\">Pallet</a>&lt;Runtime, <a class=\"struct\" href=\"frame_support/instances/struct.Instance1.html\" title=\"struct frame_support::instances::Instance1\">Instance1</a>&gt;</h4></section><section id=\"associatedtype.AssetRate\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AssetRate\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">AssetRate</a> = <a class=\"struct\" href=\"pallet_asset_rate/pallet/struct.Pallet.html\" title=\"struct pallet_asset_rate::pallet::Pallet\">Pallet</a>&lt;Runtime&gt;</h4></section></div></details>","CollectivesWestendParaPallet","westend_system_emulated_network::CollectivesWestendPara"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Chain-for-CollectivesWestend%3CN%3E\" class=\"impl\"><a href=\"#impl-Chain-for-CollectivesWestend%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a> for CollectivesWestend&lt;N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"xcm_emulator/trait.Network.html\" title=\"trait xcm_emulator::Network\">Network</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Runtime\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Runtime\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" class=\"associatedtype\">Runtime</a> = Runtime</h4></section><section id=\"associatedtype.RuntimeCall\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RuntimeCall\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Chain.html#associatedtype.RuntimeCall\" class=\"associatedtype\">RuntimeCall</a> = RuntimeCall</h4></section><section id=\"associatedtype.RuntimeOrigin\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RuntimeOrigin\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Chain.html#associatedtype.RuntimeOrigin\" class=\"associatedtype\">RuntimeOrigin</a> = RuntimeOrigin</h4></section><section id=\"associatedtype.RuntimeEvent\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RuntimeEvent\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Chain.html#associatedtype.RuntimeEvent\" class=\"associatedtype\">RuntimeEvent</a> = RuntimeEvent</h4></section><section id=\"associatedtype.System\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.System\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Chain.html#associatedtype.System\" class=\"associatedtype\">System</a> = <a class=\"struct\" href=\"frame_system/pallet/struct.Pallet.html\" title=\"struct frame_system::pallet::Pallet\">Pallet</a>&lt;&lt;CollectivesWestend&lt;N&gt; as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>&gt;</h4></section><section id=\"associatedtype.Network\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Network\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"xcm_emulator/trait.Chain.html#associatedtype.Network\" class=\"associatedtype\">Network</a> = N</h4></section><section id=\"method.account_data_of\" class=\"method trait-impl\"><a href=\"#method.account_data_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Chain.html#tymethod.account_data_of\" class=\"fn\">account_data_of</a>(\n    account: &lt;&lt;CollectivesWestend&lt;N&gt; as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>\n) -&gt; <a class=\"struct\" href=\"pallet_balances/types/struct.AccountData.html\" title=\"struct pallet_balances::types::AccountData\">AccountData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u128.html\">u128</a>&gt;</h4></section><section id=\"method.events\" class=\"method trait-impl\"><a href=\"#method.events\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Chain.html#tymethod.events\" class=\"fn\">events</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;CollectivesWestend&lt;N&gt; as <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.RuntimeEvent\" title=\"type xcm_emulator::Chain::RuntimeEvent\">RuntimeEvent</a>&gt;</h4></section><section id=\"method.account_id_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_emulator/lib.rs.html#217\">source</a><a href=\"#method.account_id_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Chain.html#method.account_id_of\" class=\"fn\">account_id_of</a>(\n    seed: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>\n) -&gt; &lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a></h4></section></div></details>","Chain","westend_system_emulated_network::CollectivesWestendPara"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()