## 2026-11-05 - Remove redundant setData for derived array lengths
**Learning:** In WeChat Mini Programs, updating derived state (like array lengths) via `setData` inside a property's `observer` triggers redundant secondary render cycles and bridge serialization overhead.
**Action:** Compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties to templates (e.g., `data="{{listLength: list.length}}"`) instead of using `setData` in JS observers.
