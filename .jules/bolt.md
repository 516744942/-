## 2024-05-17 - Prevent redundant `setData` in Mini Program observers
**Learning:** WeChat Mini Program components often compute derived state (e.g. `listLength`) in the observer of a property (e.g. `list`). Calling `setData` unconditionally inside the observer causes redundant secondary render cycles when the property's reference changes but the derived primitive value does not.
**Action:** Always wrap `setData` calls inside observers that compute derived state with a strict equality check (e.g. `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary renders.
