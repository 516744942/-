## 2026-08-26 - Optimize setData for derived array lengths in WeChat Mini Program components
**Learning:** Avoid using `setData` inside a component property's `observer` to set derived state (like array lengths). It triggers redundant secondary render cycles over the JS/Native bridge.
**Action:** Compute and use derived state directly in WXML templates (e.g., passing `listLength: list.length` inline via `data="{{...}}"`), or conditionally wrap `setData` calls in strict equality checks (e.g. `if (this.data.listLength !== newLength)`).
