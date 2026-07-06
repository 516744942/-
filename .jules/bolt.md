## 2024-07-06 - Prevent redundant re-renders in WeChat Mini Program components
**Learning:** In WeChat Mini Program components, blindly calling `setData` inside an `observer` for derived state (like array lengths) triggers redundant secondary render cycles when object references update but the length hasn't changed.
**Action:** Wrap the `setData` call in a strict equality check with safety null checks (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent these redundant render cycles.
