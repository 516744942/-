## 2024-05-24 - Prevent redundant renders from derived state observers
**Learning:** In WeChat Mini Programs, updating derived state (like array lengths) via `setData` inside an `observer` triggers redundant secondary render cycles when the object reference changes but the primitive value (length) remains the same.
**Action:** Wrap `setData` calls for derived state in strict equality checks with safety null checks (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary renders when primitive values haven't changed.
