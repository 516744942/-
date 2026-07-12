## 2026-07-12 - Prevent secondary renders in WeChat Mini Programs
**Learning:** Updating derived state like `listLength: newVal.length` inside an `observer` using `setData` triggers redundant secondary render cycles in WeChat Mini Programs.
**Action:** Compute derived state directly in the WXML template (e.g., `list.length!=0`) or pass it inline as an assigned property (e.g., `data="{{...item, listLength: list.length}}"`) to the template to avoid unnecessary `setData` overhead, whilst preserving initial UI state hacks in the `data` block.
