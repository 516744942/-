## 2024-05-20 - Avoid redundant setData in WeChat Mini Programs
**Learning:** Setting derived state (like array lengths) inside a property observer using setData triggers unnecessary secondary render cycles due to IPC overhead between the logical and view layers.
**Action:** Compute derived state directly in the WXML template (e.g., `{{list.length}}`) or pass it as inline properties `data="{{listLength: list.length}}"`, removing the setData calls in observers entirely.
