## 2026-07-08 - Prevent Redundant Renders in Array Observers
**Learning:** Setting derived state (like `listLength: newVal.length`) directly inside component observers triggers unnecessary secondary render cycles when object references update but primitive values do not.
**Action:** Always wrap `setData` calls for derived array lengths in property observers with a strict equality check (`if (newVal && this.data.listLength !== newVal.length)`).
