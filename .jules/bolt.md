
## 2024-05-23 - [Prevent Redundant Renders in WXML Component Observers]
**Learning:** In WeChat Mini Programs, setting derived state (like array lengths) via `setData` inside an `observer` triggers a costly, redundant secondary render cycle each time the object reference updates.
**Action:** Compute derived state directly in the WXML template (e.g. `{{list.length}}`) or pass it via computed inline properties (e.g. `data="{{...item, listLength: list.length}}"`) to child templates. If `setData` is required to prevent empty-state flashing (e.g., when a default `listLength: 1` is used), wrap it in a strict equality check (`if (newVal && this.data.listLength !== newVal.length)`) to safely skip redundant updates.
