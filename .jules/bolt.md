## 2024-05-24 - Avoid derived state in component observers

**Learning:** Setting derived state (like array lengths) via `setData` inside a WeChat Mini Program component property's `observer` triggers redundant secondary render cycles.
**Action:** Always compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) instead of maintaining it in component state.