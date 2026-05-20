
## 2024-05-20 - [Optimize setData in Observers]
**Learning:** In WeChat Mini Programs, setting derived state (like array length) inside a component property's observer using setData triggers redundant render cycles.
**Action:** Compute derived state directly in WXML templates or pass as inline properties (e.g., listLength: list.length), or wrap setData in strict equality checks if it cannot be removed.
