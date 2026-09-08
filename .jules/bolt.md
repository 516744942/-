## 2024-05-14 - Removed redundant `setData` for derived state in rowscroll component
**Learning:** Calling `setData` within a property `observer` just to compute derived state (like array length) causes unnecessary secondary render cycles and IPC communication in WeChat Mini Programs.
**Action:** Always compute derived state directly within the WXML template (e.g. using `listLength: list.length` in template data bindings) instead of storing it via `setData` inside an observer.
