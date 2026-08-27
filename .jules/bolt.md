## 2024-05-24 - Removing redundant setData in observer
**Learning:** In WeChat Mini Programs, setting derived state (like array lengths) via `setData` inside an `observer` triggers redundant secondary render cycles, degrading performance.
**Action:** Remove `setData` in `observer` for derived state, and compute it directly in WXML templates (e.g. `{{list.length}}`) or pass it as inline template properties (`data="{{listLength: list.length}}"`) when templates are involved.
