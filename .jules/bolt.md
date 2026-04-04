## 2024-05-24 - [Avoid setData in Mini Program Component Observers for Derived State]
**Learning:** Setting derived state (like array length) inside a component property `observer` using `setData` triggers redundant secondary render cycles, degrading performance, especially in list components (`courselist`, `rowscroll`).
**Action:** Always compute derived state directly in WXML templates (e.g., `{{list.length}}`) or pass it explicitly into `<template>` blocks using object destructuring (e.g., `data="{{...item, listLength: list.length}}"`) to prevent an additional unneeded render cycle.
