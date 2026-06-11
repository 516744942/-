## 2026-06-11 - Prevent redundant render cycles by checking derived state before setData
**Learning:** Using `setData` inside component observers to set derived state (like array lengths) can trigger redundant secondary render cycles if the object reference changes but the derived primitive value does not.
**Action:** When an observer must update derived state, wrap the `setData` call in a strict equality check (e.g., `if (newVal && this.data.listLength !== newVal.length)`) to prevent unnecessary renders and safeguard against null values.
