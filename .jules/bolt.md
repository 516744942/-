## 2024-05-18 - WeChat Mini Program Performance Optimization
**Learning:** Using `setData` inside an `observer` for component properties in WeChat Mini Programs causes redundant render cycles.
**Action:** Remove `setData` calls for derived state in observers and compute derived values directly in WXML or pass them inline as computed properties.
