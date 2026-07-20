
## 2026-07-20 - Avoid redundant setData in observers for derived state
**Learning:** Using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles. In cases where the derived state cannot be cleanly removed (e.g., used as a UI hack to prevent empty-state flashing), it should be wrapped in a strict equality check.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) when possible. If an observer must update derived state, wrap the `setData` call in a strict equality check to prevent unnecessary renders.
