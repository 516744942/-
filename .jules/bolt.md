## 2024-05-18 - Optimize derived state in WXML and observers
**Learning:** Updating derived state like `array.length` via `setData` in property observers triggers redundant secondary render cycles.
**Action:** Whenever possible, pass derived state directly in WXML templates (e.g., `data="{{...item, listLength: list.length}}"`) and remove the `setData` call. If it must be updated in the JS side, wrap `setData` in a strict equality check (e.g., `if (newVal && this.data.listLength !== newVal.length)`).
