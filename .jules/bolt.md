## 2024-05-18 - Prevent redundant setData on array length observation
**Learning:** WeChat Mini Program observers shouldn't unconditionally use setData for derived state like array length, as it triggers redundant render cycles when the length hasn't changed.
**Action:** Wrap the setData call in an `if (this.data.derivedState !== newState)` check to ensure the render cycle is only triggered when absolutely necessary.
