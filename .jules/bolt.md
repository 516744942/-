
## 2026-10-28 - Eliminate redundant setData calls in list observers
**Learning:** In WeChat Mini Programs, setting derived state like array lengths using `setData` inside a component property's observer is an anti-pattern that triggers redundant secondary render cycles across the logical/view layer bridge.
**Action:** Avoid `setData` for derived array lengths. Instead, compute and use the length directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to optimize rendering performance.
