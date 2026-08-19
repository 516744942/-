## 2024-08-19 - Optimize derived state updates in WXML and observers
**Learning:** Unconditional `setData` calls in component observers for derived state (like array lengths) trigger redundant render cycles in WeChat Mini Programs.
**Action:** Compute derived state directly in WXML when possible, or wrap `setData` in equality checks within observers to minimize view layer bridge traversals.
