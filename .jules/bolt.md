
## 2024-08-11 - [Optimize Derived State Updates in Observers]
**Learning:** Setting derived states (like array lengths) in WeChat Mini Program component property `observer`s using unconditional `setData` causes redundant secondary render cycles. Removing them blindly can break visual hacks (like empty-state flashing prevention initialized in `data`).
**Action:** When a fallback is needed in `data`, wrap the `setData` in a strict equality check (`if (this.data.listLength !== newLength)`). Otherwise, remove `setData` and compute the derived property directly in WXML (e.g. `data="{{listLength: list.length}}"`).
