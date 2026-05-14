## 2024-05-24 - Avoid `setData` for derived array lengths in Mini Program observers
**Learning:** In WeChat Mini Program components, updating derived state (like array length) inside a property's `observer` using `setData` triggers redundant render cycles.
**Action:** Instead of `observer` and `setData`, pass the computed property directly to templates (e.g. `data="{{...item, listLength: list.length}}"`) or compute it directly in WXML.
