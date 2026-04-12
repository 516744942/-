## 2024-05-24 - Avoid `setData` for derived state in component property observers
**Learning:** In WeChat Mini Programs, using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles, which degrades performance.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to avoid unnecessary re-renders.
