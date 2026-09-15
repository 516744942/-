## 2024-06-25 - Prevent Unnecessary SetData on Derived List Lengths
**Learning:** Setting derived array lengths (like `listLength`) inside property observers using `setData` unconditionally triggers secondary render cycles, which is a significant anti-pattern in WeChat Mini Programs.
**Action:** Either compute the derived state directly in the WXML template (e.g., `data="{{listLength: list.length}}"`) or wrap the `setData` in an explicit conditional equality check against the existing state (`this.data.listLength !== newLength`) to prevent redundant renders.
