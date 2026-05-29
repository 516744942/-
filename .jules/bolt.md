## 2024-05-24 - [Avoid Unconditional setData in Observers]
**Learning:** Calling `setData` indiscriminately inside component observers for derived states triggers redundant secondary render cycles, especially when object references change but primitive values (like lengths) do not.
**Action:** Wrap derived state `setData` updates inside observers with a strict equality and safety check (e.g., `if (newVal && this.data.listLength !== newVal.length)`).
