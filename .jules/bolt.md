## 2026-08-09 - Avoid Redundant setData for Derived State in Observers
**Learning:** In WeChat Mini Programs, unconditionally calling setData for derived state (like array length) inside property observers causes expensive, redundant render cycles over the JS-to-view bridge. Additionally, raw array `newVal.length` calls can crash if `newVal` is null.
**Action:** Always compute a safe fallback value (e.g. `newVal ? newVal.length : 0`) and wrap the setData call in a strict equality check (`if (this.data.listLength !== newLength)`) to prevent unnecessary renders and prevent crashes.
