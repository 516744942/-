## 2024-05-24 - [Optimize Component Observers]
**Learning:** Calling `setData` unconditionally within an observer to update derived state (like array length) triggers redundant render cycles and blocks the Main Thread in WeChat Mini Programs.
**Action:** Always compute derived state in the WXML template if possible, or wrap `setData` calls in strict equality checks (`this.data.state !== newState`) to prevent unnecessary IPC overhead.
