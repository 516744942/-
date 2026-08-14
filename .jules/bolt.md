
## 2026-08-14 - Prevent Secondary Render Cycles in Observers Safely
**Learning:** Using unconditional `setData` inside a property observer to update derived state (like array lengths) triggers an unnecessary secondary render cycle across the bridge in WeChat Mini Programs. Completely removing it can cause empty-state visual flashing regressions if default initializers are used as UI hacks.
**Action:** Wrap the `setData` call for derived state in a strict equality check to prevent redundant render cycles while ensuring `null` or `undefined` properties properly reset the state.
