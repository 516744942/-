
## 2026-07-23 - Optimize Derived State Updates in Observers
**Learning:** In WeChat Mini Programs, using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties. If `setData` must be used to preserve a default `data` block initialization (UI hack), wrap it in a strict equality check to prevent redundant updates.
