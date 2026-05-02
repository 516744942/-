## 2024-05-24 - Prevent Redundant Renders in Array Observers
**Learning:** Using `setData` inside component `observer` for derived states like array lengths can trigger redundant secondary render cycles when object references change but primitive values (like array length) do not.
**Action:** When an observer must update derived state, wrap the `setData` call in a strict equality check (e.g., `if (this.data.listLength !== newVal.length)`) to prevent unnecessary renders. Avoid removing intentional default values in the `data` block, as they can prevent empty-state flashing.
