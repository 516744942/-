## 2024-05-24 - [Minimize setData calls in component properties' observers]
**Learning:** In WeChat Mini Programs, unconditionally calling `setData` inside an `observer` function (to compute derived state like array lengths) causes unnecessary secondary render cycles, even if the primitive value hasn't changed but the object reference updated.
**Action:** Wrap `setData` calls for derived state in a strict equality check with safety null checks (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent redundant render cycles.
