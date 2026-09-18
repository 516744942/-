## 2024-05-18 - [Avoid setData for derived state in observers]
**Learning:** Calling `setData` within a property's `observer` to store derived state (like array length) causes unnecessary secondary render cycles.
**Action:** Compute derived state directly in the WXML template (e.g., `{{list.length}}`) instead of tracking it in the component's `data` via `setData` in observers.
