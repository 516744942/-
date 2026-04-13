## 2024-04-13 - Optimize derived state rendering in Mini Program components
**Learning:** Using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute derived state directly in WXML (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to avoid redundant renders.
