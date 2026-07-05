## 2026-07-05 - [Avoid setData in observer for derived state]
**Learning:** In WeChat Mini Programs, using setData inside a component property observer to set derived states (like array lengths) triggers redundant secondary render cycles.
**Action:** Compute derived state directly in WXML templates or pass it as computed inline properties to templates. If setData is unavoidable, wrap it in a strict equality check.
