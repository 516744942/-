## 2026-07-30 - WeChat Mini Program setData Optimization
**Learning:** Using setData inside a component property's observer to set derived state (like array lengths) triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** Compute derived state directly in WXML templates (e.g., {{list.length}}) or pass it as computed inline properties (e.g., data="{{listLength: list.length}}") instead. For unavoidable component-level state updates, wrap setData calls in strict equality checks to prevent redundant renders.
