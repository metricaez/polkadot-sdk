(function() {var type_impls = {
"bridge_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#639\">source</a><a href=\"#impl-Default-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#639\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bridge_hub_rococo_runtime::BridgeWestendParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#impl-Serialize-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","bridge_hub_rococo_runtime::BridgeWestendParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildGenesisConfig-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#650\">source</a><a href=\"#impl-BuildGenesisConfig-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"frame_support/traits/hooks/trait.BuildGenesisConfig.html\" title=\"trait frame_support::traits::hooks::BuildGenesisConfig\">BuildGenesisConfig</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.build\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#651\">source</a><a href=\"#method.build\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/hooks/trait.BuildGenesisConfig.html#tymethod.build\" class=\"fn\">build</a>(&amp;self)</h4></section></summary><div class='docblock'>The build function puts initial <code>GenesisConfig</code> keys/values pairs into the storage.</div></details></div></details>","BuildGenesisConfig","bridge_hub_rococo_runtime::BridgeWestendParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, I&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","bridge_hub_rococo_runtime::BridgeWestendParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#649\">source</a><a href=\"#impl-BuildStorage-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"bridge_hub_rococo_runtime/trait.BuildStorage.html\" title=\"trait bridge_hub_rococo_runtime::BuildStorage\">BuildStorage</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#649\">source</a><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bridge_hub_rococo_runtime/trait.BuildStorage.html#tymethod.assimilate_storage\" class=\"fn\">assimilate_storage</a>(&amp;self, storage: &amp;mut <a class=\"struct\" href=\"sp_storage/struct.Storage.html\" title=\"struct sp_storage::Storage\">Storage</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#216\">source</a><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bridge_hub_rococo_runtime/trait.BuildStorage.html#method.build_storage\" class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_storage/struct.Storage.html\" title=\"struct sp_storage::Storage\">Storage</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","bridge_hub_rococo_runtime::BridgeWestendParachainsConfig"]],
"bridge_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#639\">source</a><a href=\"#impl-Default-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#639\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bridge_hub_westend_runtime::BridgeRococoParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#impl-Serialize-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","bridge_hub_westend_runtime::BridgeRococoParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildGenesisConfig-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#650\">source</a><a href=\"#impl-BuildGenesisConfig-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"frame_support/traits/hooks/trait.BuildGenesisConfig.html\" title=\"trait frame_support::traits::hooks::BuildGenesisConfig\">BuildGenesisConfig</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.build\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#651\">source</a><a href=\"#method.build\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/hooks/trait.BuildGenesisConfig.html#tymethod.build\" class=\"fn\">build</a>(&amp;self)</h4></section></summary><div class='docblock'>The build function puts initial <code>GenesisConfig</code> keys/values pairs into the storage.</div></details></div></details>","BuildGenesisConfig","bridge_hub_westend_runtime::BridgeRococoParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, I&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#76\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","bridge_hub_westend_runtime::BridgeRococoParachainsConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#649\">source</a><a href=\"#impl-BuildStorage-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"bridge_hub_westend_runtime/trait.BuildStorage.html\" title=\"trait bridge_hub_westend_runtime::BuildStorage\">BuildStorage</a> for <a class=\"struct\" href=\"pallet_bridge_parachains/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_parachains::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_bridge_parachains/pallet/trait.Config.html\" title=\"trait pallet_bridge_parachains::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_bridge_parachains/lib.rs.html#649\">source</a><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bridge_hub_westend_runtime/trait.BuildStorage.html#tymethod.assimilate_storage\" class=\"fn\">assimilate_storage</a>(&amp;self, storage: &amp;mut <a class=\"struct\" href=\"sp_storage/struct.Storage.html\" title=\"struct sp_storage::Storage\">Storage</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#216\">source</a><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bridge_hub_westend_runtime/trait.BuildStorage.html#method.build_storage\" class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_storage/struct.Storage.html\" title=\"struct sp_storage::Storage\">Storage</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","bridge_hub_westend_runtime::BridgeRococoParachainsConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()