## 2024-05-24 - [Avoid Redundant `setData` in WeChat Component Observers]
**Learning:** In WeChat Mini Program components, updating a derived state (like array length) inside a property's `observer` via `setData` triggers redundant render cycles when object references update but primitive values do not.
**Action:** Wrap the `setData` call for derived state in a strict equality check with safety null checks (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary UI re-renders.
