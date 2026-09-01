
## 2024-05-18 - Minimize redundant setData in Component Observers
**Learning:** In WeChat Mini Programs, setting data unconditionally inside a component property's observer triggers redundant secondary render cycles, degrading performance.
**Action:** When an observer must update a derived state (like array length), compute the fallback value (e.g., `const newLength = newVal ? newVal.length : 0;`) and wrap the `setData` call in a strict equality check (`if (this.data.listLength !== newLength)`) to prevent unnecessary bridge serializations.
