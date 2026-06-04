
## 2024-05-24 - WeChat Mini Program `setData` in Observers
**Learning:** Setting derived states (like array lengths) inside component `observer` callbacks triggers redundant secondary render cycles.
**Action:** Compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it inline (`data="{{listLength: list.length}}"`). When `setData` is unavoidable (e.g., to preserve default initializations), wrap it in strict equality checks `if (newVal && this.data.listLength !== newVal.length)` to prevent updates on identical primitive values.
