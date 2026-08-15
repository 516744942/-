## 2026-08-15 - WeChat Mini Program setData redundant render cycles

**Learning:** Unconditional `setData` calls inside property `observer` functions for derived states (like array lengths) trigger expensive, redundant secondary render cycles as data is serialized across the logic-view bridge. Removing them entirely can sometimes break intentional UI hacks (e.g., initial `listLength: 1` to prevent empty-state flashes).

**Action:** Compute derived state directly in WXML (e.g., `{{list.length}}`) or pass as inline template properties (`data="{{listLength: list.length}}"`) when possible. If state must be set in JS to preserve default UI behaviors, wrap the `setData` call in a strict equality check (`if (this.data.listLength !== newLength)`) to skip redundant renders.
