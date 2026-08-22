## 2026-08-22 - Conditional setData in Component Observers
**Learning:** Unconditional `setData` calls inside component observers for derived states (like array lengths) trigger redundant secondary render cycles across the bridge from logical layer to view layer in WeChat Mini Programs.
**Action:** Wrap `setData` calls within observers in strict equality checks (e.g., `if (this.data.listLength !== newLength)`) to only trigger renders when the derived state actually changes.
