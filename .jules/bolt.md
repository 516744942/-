## 2024-05-19 - [Avoid setData in Observers for Derived State]
**Learning:** Setting derived state (like array lengths) inside WeChat Mini Program component property observers triggers redundant cross-boundary secondary render cycles, and empty observers register unnecessary watchers.
**Action:** Ensure such state is computed directly in the WXML or passed as inline computed properties, and remove all empty or comment-only observer functions.
