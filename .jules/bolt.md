## 2024-05-22 - [Remove redundant setData for derived list lengths]
**Learning:** Using `setData` inside an observer to update derived state (like array lengths from a prop) triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** Compute derived state directly in WXML (e.g., `{{list.length}}`) or pass it inline to templates (`data="{{listLength: list.length}}"`) to avoid unnecessary renders.
