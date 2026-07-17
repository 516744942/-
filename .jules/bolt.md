## 2024-05-24 - Removed redundant `setData` for derived array length in WeChat Mini Program components
**Learning:** In WeChat Mini Program components, updating derived state (like `listLength: newVal.length`) within a property `observer` using `setData` causes a redundant secondary render cycle, hindering performance.
**Action:** Remove `setData` in `observer` and either compute the length directly in WXML (e.g., `list.length`) or pass it inline as a derived data property when calling WXML templates (e.g., `data="{{...item, listLength: list.length}}"`).
