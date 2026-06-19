## 2024-06-19 - Optimize redundant setData calls in list observers
**Learning:** In WeChat Mini Programs, setting derived state (like array lengths) inside component property observers via `setData` triggers redundant secondary render cycles.
**Action:** Compute derived state directly in WXML (e.g. `listLength: list.length` in template properties), or wrap unavoidable `setData` calls in strict equality checks (`if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary renders when object references update but values do not.
