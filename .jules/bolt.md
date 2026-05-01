## 2026-05-01 - Prevent observer setData for array lengths
**Learning:** In WeChat Mini Program component properties, using `setData` inside an observer to simply store a derived state like `newVal.length` causes an entirely redundant re-render cycle. This derived state can either be used directly in WXML as `{{list.length}}` or computed inline when passing to a template as `data="{{...item, listLength: list.length}}"`.
**Action:** Remove `setData` for array length from `observer` blocks in component `properties` and compute the length directly in the WXML template.
