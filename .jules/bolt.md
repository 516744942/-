## 2024-05-18 - [Remove Unnecessary setData in Observers]
**Learning:** Using `setData` inside a component property's `observer` to track array lengths (`listLength: newVal.length`) is an anti-pattern in WeChat Mini Programs. It triggers redundant secondary render cycles across the logical and view layers.
**Action:** Pass derived state as computed properties inline (e.g., `data="{{...item, listLength: list.length}}"`) or evaluate it directly in WXML (`wx:if="{{list.length != 0}}"`) instead of using `setData` to update a tracked component data variable.
