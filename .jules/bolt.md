## 2024-04-26 - Avoid setData in observers for derived state
**Learning:** In WeChat Mini Program, using setData inside a component property's observer to set derived state (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute and use derived state directly in WXML templates (e.g., {{list.length}}) or pass it as computed inline properties (e.g., data="{{listLength: list.length}}") instead.
