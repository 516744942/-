## 2026-08-28 - [Optimize derived state updates in observers]
**Learning:** [In WeChat Mini Programs, setting derived state (e.g. array lengths) using unconditional `setData` inside property observers triggers redundant secondary render cycles, negatively impacting performance.]
**Action:** [When updating derived state in observers, compute the value and wrap the `setData` call in a strict equality check (e.g. `if (this.data.listLength !== newLength)`) to avoid unnecessary re-renders.]
