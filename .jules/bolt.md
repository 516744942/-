
## 2026-07-26 - Optimize Observer Derived State
**Learning:** Using setData for derived state (e.g. array length) inside WeChat Mini Program component observers triggers redundant secondary render cycles.
**Action:** When possible, compute derived state directly in WXML or pass it inline (e.g., data="{{listLength: list.length}}"). If setData is unavoidable (like for intentional default initializations to prevent empty-state flashing), compute the fallback value (e.g., const newLength = newVal ? newVal.length : 0;) and wrap it in a strict equality check (if (this.data.listLength !== newLength)) to minimize redundant re-renders.
