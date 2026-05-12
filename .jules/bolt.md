
## 2026-05-12 - [Eliminate Redundant setData in Property Observers]
**Learning:** Computing derived state (like array length) inside property observers and updating it via `setData` triggers redundant render cycles in WeChat Mini Programs. Passing computed state inline to WXML templates or adding conditional checks prevents these cycles while keeping the code clean.
**Action:** Always prefer computing derived values directly in WXML inline data bindings or use strict equality guards (`if (newVal && this.data.listLength !== newVal.length)`) inside observers to prevent unnecessary `setData` calls on reference updates.
