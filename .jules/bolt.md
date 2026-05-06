## 2026-05-06 - Optimize Derived State Updates
**Learning:** Computing derived state (like array length) inside `setData` triggers redundant render cycles in Mini Programs. Passing it inline in WXML or wrapping with a diff check avoids this.
**Action:** Avoid `setData` inside observers for derived state when possible.
