
## 2026-09-03 - [Remove Redundant setData for Derived State in Observers]
**Learning:** Setting derived state (like array length) inside a component's observer using setData without an equality check triggers redundant secondary render cycles in WeChat Mini Programs. When UI fallback states (e.g. listLength: 1) are required, replacing setData entirely in WXML is not feasible.
**Action:** Use derived state directly in WXML (e.g., listLength: list.length) when possible. If an observer must update derived state to maintain a UI fallback hack, compute the new value safely and wrap the setData in a strict equality check to prevent unnecessary renders.
