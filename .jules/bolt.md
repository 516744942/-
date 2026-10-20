## 2024-10-20 - Avoid setData in Observers for Derived State
**Learning:** In WeChat Mini Programs, setting derived state (like array length) inside a component property's observer using `setData` triggers redundant and expensive secondary render cycles.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to bypass unnecessary bridge serialization.
