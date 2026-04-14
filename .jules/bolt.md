## 2024-04-14 - WeChat Mini Program Performance: Redundant `setData` in Observers

**Learning:** Using `setData` inside an observer to compute derived state (e.g., `listLength: newVal.length`) triggers an unnecessary secondary render cycle, leading to performance bottlenecks, especially in components frequently receiving prop updates. In WeChat Mini Programs, derived state should often be handled directly in WXML (like using `{{list.length}}`) or passed into templates via inline assignment in `data` (like `data="{{listLength: list.length}}"`).

**Action:** Remove derived state from the `data` block and `observer` methods. Move this computational logic to the WXML template bindings where possible to optimize render cycles and significantly improve performance.
