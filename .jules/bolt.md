## 2026-08-06 - Prevent Redundant Renders in WeChat Component Observers
**Learning:** Using `setData` directly inside an `observer` for derived states (like array lengths) triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** When derived states must be set in an observer, always compute the fallback value and wrap the `setData` call in a strict equality check (e.g., `if (this.data.listLength !== newLength)`) to skip unnecessary updates.
