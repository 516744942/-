## 2024-05-20 - Redundant setData in WeChat Observers
**Learning:** In WeChat Mini Programs, setting derived state (like array `length`) via `this.setData` inside property `observer` functions causes expensive and redundant bridge serializations.
**Action:** Remove these `setData` calls and instead compute the derived state directly in WXML (e.g., `wx:if="{{list.length > 0}}"`) or pass it inline as computed scope data to templates (e.g., `data="{{...item, listLength: list.length}}"`).
