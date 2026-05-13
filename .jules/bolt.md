## 2024-05-24 - Mini Program Observer SetData Optimization
**Learning:** In WeChat Mini Program development, using `setData` inside an observer that watches an array prop just to maintain a derived state (`listLength`) triggers unnecessary re-renders. This is an anti-pattern.
**Action:** Remove `setData` from observers for derived properties and compute the derived data directly inside the WXML (e.g. `list.length`), or if it's used inside `<template>`, ensure it is passed correctly without needing extra component state (e.g. `data="{{...item, index, listLength: list.length}}"`).
