## 2024-05-24 - Prevent redundant re-renders in array length observers
**Learning:** In WeChat Mini Programs, setting a derived state like array length inside an observer without equality checks triggers redundant secondary render cycles when object references change but the array length remains the same.
**Action:** Wrap setData calls for derived state in observers with a strict equality check and safety null checks (e.g., if (newVal && this.data.listLength !== newVal.length)).
