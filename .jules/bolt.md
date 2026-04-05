## 2024-04-05 - Avoid setData in component property observers for derived state
**Learning:** Using `this.setData({ listLength: newVal.length })` inside a component property's `observer` triggers redundant secondary render cycles, slowing down WeChat Mini Programs.
**Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as inline computed properties when rendering templates (e.g., `data="{{listLength: list.length}}"`) to bypass unnecessary data-binding updates.
