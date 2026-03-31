## 2024-05-14 - WeChat Mini Program List Observer Performance Anti-Pattern
**Learning:** Using `setData` inside an array property's `observer` to set the derived array length (e.g., `listLength: newVal.length`) is an anti-pattern that triggers redundant secondary render cycles, which is bad for performance.
**Action:** Remove `setData` inside `list` property observers. Instead, use inline derived state like `list.length` directly in the WXML file or pass computed inline properties if a template is used.
