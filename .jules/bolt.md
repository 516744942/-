## 2026-07-21 - [Optimize redundant setData in component observers]
**Learning:** Using setData inside an observer for derived state like array lengths triggers unnecessary secondary render cycles. Passing computed inline properties in WXML or wrapping setData in strict equality checks optimizes this pattern.
**Action:** Compute derived state directly in WXML templates or pass it via computed inline properties (e.g., `data="{{listLength: list.length}}"`). If setData is unavoidable due to UI state hacks, wrap it in a strict equality check to prevent redundant renders.
