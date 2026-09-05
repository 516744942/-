## 2024-05-24 - Remove redundant setData calls in WeChat Mini Program observers
**Learning:** Using `setData` inside an observer to update derived state (like array lengths) triggers redundant secondary render cycles, which is expensive due to the bridge serialization cost.
**Action:** Compute derived states directly in WXML templates (e.g., `list.length`) or pass them as inline computed properties (e.g., `data="{{listLength: list.length}}"`) to avoid unnecessary logical layer updates. When preserving default UI states, ensure `setData` is wrapped in equality checks.
