
## 2026-07-24 - WeChat Mini Program: Optimizing Derived State in Observers
**Learning:** Using `setData` unconditionally within a component's property `observer` (e.g., setting `listLength` from `newVal.length`) triggers redundant, expensive secondary render cycles.
**Action:** Always wrap `setData` calls in `observer` functions with a strict equality check against the existing state (e.g., `if (this.data.listLength !== newLength)`) or replace with WXML/computed property alternatives, while ensuring fallback values like `0` are computed safely if the property can be null or undefined.
