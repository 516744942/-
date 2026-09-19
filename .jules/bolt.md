## 2024-05-24 - Conditional `setData` inside `observer` for derived state
**Learning:** In WeChat Mini Programs, setting derived states (like array lengths) via unconditional `setData` inside an `observer` triggers redundant secondary render cycles.
**Action:** Always compute derived state using a strict equality check (e.g., `if (this.data.listLength !== newLength)`) before calling `setData` inside property observers to minimize expensive bridge communications, while ensuring `null` or `undefined` properties properly reset the state.
