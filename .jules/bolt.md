## 2024-03-26 - Avoid setData inside observer for derived list lengths
**Learning:** Using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) instead.
