## 2024-05-18 - Avoid setData for Derived State in Observers
**Learning:** In WeChat Mini Programs, setting derived state (like `array.length`) using `setData` inside a property `observer` triggers a redundant secondary render cycle, wasting performance.
**Action:** Compute derived values directly in the WXML template (e.g., using `{{list.length}}`) instead of tracking them in the component's state via observers.
