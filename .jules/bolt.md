## 2024-05-24 - [Avoid redundant setData in component property observers]
**Learning:** Using `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles, slowing down list rendering. Also discovered several dead-code/empty observers polluting the logic layer.
**Action:** Compute derived state directly in WXML templates (`{{list.length}}`) or pass it as computed inline properties (`data="{{listLength: list.length}}"`) to templates instead. Proactively clean up empty observers.
