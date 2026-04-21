## 2026-04-21 - [Avoid Redundant Render Cycles in WeChat Mini Program Components]
 **Learning:** WeChat Mini Programs suffer from performance degradation when `setData` is used inside property observers to compute derived states (like array lengths), as it triggers secondary, redundant render cycles.
 **Action:** Compute and use derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it via computed inline template properties (`data="{{listLength: list.length}}"`) to bypass the observer-based `setData` entirely.
