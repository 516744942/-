## 2026-04-23 - Prevent Redundant Renders in WeChat Mini Program Components
**Learning:** Calling `setData` inside a component property's `observer` to set derived state (like array lengths) triggers redundant secondary render cycles due to IPC overhead.
**Action:** Compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it as computed inline properties (e.g., `data="{{listLength: list.length}}"`) to prevent these unnecessary secondary updates.
