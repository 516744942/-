## 2024-03-27 - WeChat Mini Program: Avoid setData in property observers for derived state
**Learning:** Setting derived state (like array lengths) inside a component property's observer using `setData` triggers redundant secondary render cycles, leading to performance bottlenecks, particularly when dealing with lists.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it inline as template data instead of maintaining separate variables in the component's state via `setData` in observers.
