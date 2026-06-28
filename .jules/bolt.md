
## 2026-06-28 - Prevent Redundant Re-renders with Strict Equality Checks in WXML Observers
**Learning:** When using observers in WeChat Mini Program components to update derived state (e.g. `listLength: newVal.length`), blindly calling `setData` triggers redundant secondary render cycles when the object reference changes but primitive values do not.
**Action:** Always wrap `setData` calls in WXML observers updating primitive values with strict equality checks (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary renders.
