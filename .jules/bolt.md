## 2024-04-12 - WeChat Mini Program Performance: Avoid setData in Property Observers for Derived State
**Learning:** Using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles, creating a significant performance bottleneck specific to this architecture.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) instead of using `setData` in the observer.
