
## 2026-08-23 - [Optimize Component Derived State Data Flow]
**Learning:** In WeChat Mini Programs, setting derived state (like array lengths) inside component property `observer`s using `setData` is an anti-pattern as it triggers redundant, expensive secondary render cycles bridging logical and view layers.
**Action:** Compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass as computed inline properties where possible. When `setData` is strictly required to prevent empty-state flashing (such as preserving default fallback initializations), wrap `setData` in strict equality checks (`if (this.data.val !== newval)`) to minimize redundant updates.
