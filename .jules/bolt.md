## 2024-03-24 - Avoid redundant setData in WeChat Mini Program Component Observers
**Learning:** Setting derived states like `listLength: newVal.length` inside an observer via `setData` triggers a second redundant render cycle every time the `list` property updates.
**Action:** Remove `setData` in `observer` for derived primitive states (like array lengths). Use the array's `.length` directly in WXML (e.g. `{{list.length}}`) or pass it as computed variables `data="{{listLength: list.length}}"`.
