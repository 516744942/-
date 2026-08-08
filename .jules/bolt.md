
## 2024-05-23 - Prevent redundant setData calls in list observers
**Learning:** In WeChat Mini Programs, setting derived state (like array length) inside a component property's observer without checking for value changes triggers redundant render cycles when the array is updated but its length remains the same.
**Action:** When updating derived state in an observer, always compute the fallback value and wrap the `setData` call in a strict equality check (`if (this.data.state !== newState)`) to avoid unnecessary re-renders.
