## 2026-06-17 - Avoid setData for Derived State in Observers
**Learning:** Calling `setData` inside a component property's observer to set derived state (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{...item, listLength: list.length}}"`). If `setData` is unavoidable, wrap it in a strict equality check to prevent redundant re-renders when object references update but primitive values do not.
