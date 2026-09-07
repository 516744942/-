## 2024-05-18 - WeChat Mini Program: Avoid setData in property observers for derived state
**Learning:** Using `setData` inside an observer to update derived state (like array lengths) triggers an expensive, redundant secondary render cycle across the logical-to-view layer bridge, degrading performance.
**Action:** Compute derived states directly in WXML templates (e.g., `{{list.length}}`) or pass them as inline computed properties, and actively strip out empty `observer` functions during component refactoring.
