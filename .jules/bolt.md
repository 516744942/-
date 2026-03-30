## 2026-03-30 - WeChat Mini Program List Length Optimization
**Learning:** In WeChat Mini Programs, avoid using `setData` inside a component property's `observer` just to compute derived state like array length. This triggers a redundant secondary render cycle, hurting performance.
**Action:** Use derived state directly in WXML templates (e.g., `{{list.length}}`) instead of computing and maintaining it separately via `setData` in an observer.
