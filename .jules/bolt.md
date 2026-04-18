## 2024-04-18 - Avoid setData for Derived State in Component Property Observers
**Learning:** In WeChat Mini Programs, updating derived state (like array lengths) inside a component property's `observer` via `setData` triggers redundant secondary render cycles, degrading performance.
**Action:** Compute and pass derived state directly in WXML templates (e.g., `data="{{...item, listLength: list.length}}"`) to eliminate unnecessary data synchronization and rendering overhead.
