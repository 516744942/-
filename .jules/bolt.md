## 2024-10-18 - [Avoid setData in Component Observers for Derived State]
**Learning:** In WeChat Mini Programs, setting derived data (like array length) using `this.setData` inside a component property's `observer` triggers redundant secondary render cycles, harming performance.
**Action:** Compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties in templates (e.g., `data="{{listLength: list.length}}"`) instead of using `setData` in observers.
