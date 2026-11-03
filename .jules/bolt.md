## 2026-11-03 - [Optimize derived state setData in observers]
**Learning:** Using setData unconditionally inside a component property's observer to set derived state (like array lengths) triggers redundant secondary render cycles, which is a significant performance bottleneck in WeChat Mini Programs.
**Action:** When a fallback default data block value requires an observer to set derived state, wrap the setData call in a strict equality check and compute fallback values to prevent redundant render cycles.
