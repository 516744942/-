## 2024-05-20 - [Redundant setData in WeChat Mini Program observers]
**Learning:** In WeChat Mini Program architectures, calling `setData` inside component `observer`s to set derived state (like array lengths) triggers redundant secondary render cycles due to the bridge serialization cost.
**Action:** Prevent redundant `setData` calls by either replacing them with inline computations in WXML (e.g., `data="{{listLength: list.length}}"`) or wrapping them in strict equality checks (e.g., `if (this.data.listLength !== newLength)`).
