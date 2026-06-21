## 2024-05-14 - Optimize Derived State Updates in Observers
**Learning:** In WeChat Mini Programs, blindly calling `setData` inside a component property's observer to update derived state (like array length) causes redundant secondary render cycles when object references update but the primitive values remain the same.
**Action:** Always wrap `setData` calls in observers with a strict equality check (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary re-renders.
