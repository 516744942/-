
## 2024-10-24 - Avoid redundant setData in observers and remove dead observer functions
**Learning:** In WeChat Mini Programs, `setData` is expensive due to bridge serialization. Calling it unconditionally inside property observers for derived state (like array lengths) causes redundant re-renders. Also, empty observer functions incur cross-boundary callback overhead.
**Action:** Compute derived state directly in WXML when possible. If an observer must update derived state via `setData`, wrap the call in a strict equality check (`if (this.data.val !== newVal)`) to prevent unnecessary renders. Actively clean up dead observer functions to reduce logic-layer overhead.
