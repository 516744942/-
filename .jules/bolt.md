## 2026-07-10 - WeChat Mini Program: Avoid redundant setData in observers for derived state
**Learning:** Using `setData` inside an observer to update derived state (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to prevent redundant render cycles.
