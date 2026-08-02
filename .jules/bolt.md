## 2026-08-02 - Prevent Redundant Render Cycles in Observers
**Learning:** Using setData in an observer to set derived states (like array lengths) without equality checks triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** Always wrap observer setData calls in strict equality checks against current data, computing a safe fallback for null/undefined values.
