## 2024-05-16 - [Optimize component observers to prevent redundant renders]
 **Learning:** In WeChat Mini Program components, avoid setting derived state (like array lengths) inside `observer` using `setData` unconditionally, as it triggers redundant secondary render cycles.
 **Action:** Compute derived state directly in WXML (`{{list.length}}`), pass as inline data blocks (`data="{{listLength: list.length}}"`), or wrap `setData` calls in observers with strict equality checks (`if (newVal && this.data.listLength !== newVal.length)`).
