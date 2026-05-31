
## 2024-05-31 - Redundant `setData` calls in WeChat Mini Program Component Observers
**Learning:** In WeChat Mini Programs, setting a derived state (like array length) inside a component property's `observer` triggers redundant secondary render cycles (`setData` calls are notoriously expensive). This happens especially when object references update but primitive values (like `list.length`) do not.
**Action:** When a derived state cannot be cleanly removed or computed directly in WXML, always wrap the `setData` call inside the observer in a strict equality check with safety null checks (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary renders.
