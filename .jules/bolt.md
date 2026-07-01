## 2024-07-01 - [Avoid Redundant Render Cycles for Derived State]
**Learning:** Using `setData` inside a property's `observer` to update derived states (like array lengths) in WeChat Mini Programs is an anti-pattern that triggers redundant secondary render cycles.
**Action:** Compute derived state directly in the WXML templates (e.g., `{{list.length}}`) or pass it via computed inline properties rather than manually setting it in the component observer.
