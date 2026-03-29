## 2024-05-24 - WeChat Mini Program: Avoid setData for Derived State in Observers
**Learning:** Using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to prevent unnecessary performance overhead.
