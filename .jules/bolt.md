
## 2024-05-18 - Optimize derived state with setData in observers
**Learning:** Avoid using `setData` inside a component property's observer for derived state like array lengths. It triggers redundant secondary render cycles. Use strict equality checks `if (newVal && this.data.listLength !== newVal.length)` to guard necessary `setData` calls, or compute the derived state directly in WXML (e.g. `data="{{listLength: list.length}}"`) when no initialization logic depends on it.
**Action:** When working on WeChat Mini Programs, evaluate all observers for `setData` usage. Convert them to inline WXML computed properties whenever possible, or wrap them in strict value-equality guards.
