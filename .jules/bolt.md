## 2024-05-24 - Avoid setData in Component Observers for Array Length
**Learning:** In WeChat Mini Programs, using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as derived data to templates (e.g., `listLength: list.length`) instead of relying on observers to sync length properties via `setData`.
