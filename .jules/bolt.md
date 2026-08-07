## 2024-05-18 - [Prevent Redundant setData in Observers]
**Learning:** In WeChat Mini Programs, calling `setData` unconditionally inside a component property `observer` (e.g. to update derived states like array lengths) triggers redundant secondary render cycles, negatively impacting performance.
**Action:** Always wrap `setData` calls inside observers with strict equality checks against the current state (`if (this.data.state !== newState)`), or better yet, avoid setting derived state in observers altogether if it can be directly computed in WXML or passed as inline properties.
