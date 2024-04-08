(function() {var type_impls = {
"sc_service":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#44-131\">source</a><a href=\"#impl-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, B, E&gt; <a class=\"struct\" href=\"sc_service/client/struct.LocalCallExecutor.html\" title=\"struct sc_service::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#50-75\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_service/client/struct.LocalCallExecutor.html#tymethod.new\" class=\"fn\">new</a>(\n    backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;B&gt;,\n    executor: E,\n    client_config: <a class=\"struct\" href=\"sc_service/client/struct.ClientConfig.html\" title=\"struct sc_service::client::ClientConfig\">ClientConfig</a>&lt;Block&gt;,\n    execution_extensions: <a class=\"struct\" href=\"sc_client_api/execution_extensions/struct.ExecutionExtensions.html\" title=\"struct sc_client_api::execution_extensions::ExecutionExtensions\">ExecutionExtensions</a>&lt;Block&gt;\n) -&gt; <a class=\"type\" href=\"sp_blockchain/error/type.Result.html\" title=\"type sp_blockchain::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Creates new instance of local call executor.</p>\n</div></details></div></details>",0,"sc_service::builder::TFullCallExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetRuntimeVersionAt%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#313-322\">source</a><a href=\"#impl-GetRuntimeVersionAt%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, B, E&gt; <a class=\"trait\" href=\"sp_version/trait.GetRuntimeVersionAt.html\" title=\"trait sp_version::GetRuntimeVersionAt\">GetRuntimeVersionAt</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_service/client/struct.LocalCallExecutor.html\" title=\"struct sc_service::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#319-321\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_version/trait.GetRuntimeVersionAt.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(&amp;self, at: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\">RuntimeVersion</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Returns the version of runtime at the given block.</div></details></div></details>","GetRuntimeVersionAt<Block>","sc_service::builder::TFullCallExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetNativeVersion-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#324-333\">source</a><a href=\"#impl-GetNativeVersion-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, B, E&gt; <a class=\"trait\" href=\"sp_version/trait.GetNativeVersion.html\" title=\"trait sp_version::GetNativeVersion\">GetNativeVersion</a> for <a class=\"struct\" href=\"sc_service/client/struct.LocalCallExecutor.html\" title=\"struct sc_service::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"sp_version/trait.GetNativeVersion.html\" title=\"trait sp_version::GetNativeVersion\">GetNativeVersion</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.native_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#330-332\">source</a><a href=\"#method.native_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_version/trait.GetNativeVersion.html#tymethod.native_version\" class=\"fn\">native_version</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"sp_version/struct.NativeVersion.html\" title=\"struct sp_version::NativeVersion\">NativeVersion</a></h4></section></summary><div class='docblock'>Returns the version of the native runtime.</div></details></div></details>","GetNativeVersion","sc_service::builder::TFullCallExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#133-146\">source</a><a href=\"#impl-Clone-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, B, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_service/client/struct.LocalCallExecutor.html\" title=\"struct sc_service::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#137-145\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sc_service::builder::TFullCallExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeVersionOf-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#299-311\">source</a><a href=\"#impl-RuntimeVersionOf-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, E, Block&gt; <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> for <a class=\"struct\" href=\"sc_service/client/struct.LocalCallExecutor.html\" title=\"struct sc_service::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a>,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#304-310\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_executor/trait.RuntimeVersionOf.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(\n    &amp;self,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\">RuntimeVersion</a>, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Extract <a href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\"><code>RuntimeVersion</code></a> of the given <code>runtime_code</code>.</div></details></div></details>","RuntimeVersionOf","sc_service::builder::TFullCallExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CallExecutor%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#148-297\">source</a><a href=\"#impl-CallExecutor%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, E, Block&gt; <a class=\"trait\" href=\"sc_client_api/call_executor/trait.CallExecutor.html\" title=\"trait sc_client_api::call_executor::CallExecutor\">CallExecutor</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_service/client/struct.LocalCallExecutor.html\" title=\"struct sc_service::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;E as <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a>&gt;::<a class=\"associatedtype\" href=\"sp_core/traits/trait.CodeExecutor.html#associatedtype.Error\" title=\"type sp_core::traits::CodeExecutor::Error\">Error</a></h4></section></summary><div class='docblock'>Externalities error type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Backend\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Backend\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#associatedtype.Backend\" class=\"associatedtype\">Backend</a> = B</h4></section></summary><div class='docblock'>The backend used by the node.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execution_extensions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#158-160\">source</a><a href=\"#method.execution_extensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.execution_extensions\" class=\"fn\">execution_extensions</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"sc_client_api/execution_extensions/struct.ExecutionExtensions.html\" title=\"struct sc_client_api::execution_extensions::ExecutionExtensions\">ExecutionExtensions</a>&lt;Block&gt;</h4></section></summary><div class='docblock'>Returns the <a href=\"sc_client_api/execution_extensions/struct.ExecutionExtensions.html\" title=\"struct sc_client_api::execution_extensions::ExecutionExtensions\"><code>ExecutionExtensions</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#162-195\">source</a><a href=\"#method.call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.call\" class=\"fn\">call</a>(\n    &amp;self,\n    at_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    call_data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    context: <a class=\"enum\" href=\"sp_core/traits/enum.CallContext.html\" title=\"enum sp_core::traits::CallContext\">CallContext</a>\n) -&gt; <a class=\"type\" href=\"sp_blockchain/error/type.Result.html\" title=\"type sp_blockchain::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class='docblock'>Execute a call to a contract on top of state in a block of given hash. <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.call\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contextual_call\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#197-258\">source</a><a href=\"#method.contextual_call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.contextual_call\" class=\"fn\">contextual_call</a>(\n    &amp;self,\n    at_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    call_data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    changes: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;<a class=\"struct\" href=\"sp_state_machine/overlayed_changes/struct.OverlayedChanges.html\" title=\"struct sp_state_machine::overlayed_changes::OverlayedChanges\">OverlayedChanges</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;Block&gt;&gt;&gt;,\n    recorder: &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"sp_api/type.ProofRecorder.html\" title=\"type sp_api::ProofRecorder\">ProofRecorder</a>&lt;Block&gt;&gt;,\n    call_context: <a class=\"enum\" href=\"sp_core/traits/enum.CallContext.html\" title=\"enum sp_core::traits::CallContext\">CallContext</a>,\n    extensions: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;<a class=\"struct\" href=\"sp_externalities/extensions/struct.Extensions.html\" title=\"struct sp_externalities::extensions::Extensions\">Extensions</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Execute a contextual call on top of state in a block of a given hash. <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.contextual_call\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#260-267\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(&amp;self, at_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>) -&gt; <a class=\"type\" href=\"sp_blockchain/error/type.Result.html\" title=\"type sp_blockchain::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\">RuntimeVersion</a>&gt;</h4></section></summary><div class='docblock'>Extract RuntimeVersion of given block <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.runtime_version\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prove_execution\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#269-296\">source</a><a href=\"#method.prove_execution\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.prove_execution\" class=\"fn\">prove_execution</a>(\n    &amp;self,\n    at_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    call_data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"type\" href=\"sp_blockchain/error/type.Result.html\" title=\"type sp_blockchain::error::Result\">Result</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"sp_trie/storage_proof/struct.StorageProof.html\" title=\"struct sp_trie::storage_proof::StorageProof\">StorageProof</a>)&gt;</h4></section></summary><div class='docblock'>Prove the execution of the given <code>method</code>. <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.prove_execution\">Read more</a></div></details></div></details>","CallExecutor<Block>","sc_service::builder::TFullCallExecutor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()