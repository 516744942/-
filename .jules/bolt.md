## 2023-10-27 - Reduce redundant render cycles in components
**Learning:** `setData` inside an observer triggers a redundant secondary render cycle in WeChat Mini Programs. When a component receives an array as a property, we don't need an observer just to derive its length.
**Action:** Compute derived state directly in WXML (`list.length`), or wrap observers in equality checks to prevent unnecessary `setData` calls.
