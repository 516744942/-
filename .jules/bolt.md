## 2024-05-09 - Remove unneeded component observer setData and empty callbacks
**Learning:** WeChat Mini Programs have heavy overhead for boundary bridge communication. Setting derived state (like listLength) via this.setData in an observer triggers redundant re-renders. Empty observers also register watchers and incur cross-boundary callback overhead.
**Action:** Pass derived state implicitly or explicitly via data template bindings in WXML instead of synchronizing it through setData. Also aggressively strip out empty observer definitions.
