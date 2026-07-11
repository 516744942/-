## 2024-07-24 - Avoid setData for Derived State in Observers
**Learning:** In WeChat Mini Programs, updating derived state (like array lengths) via `setData` inside an `observer` causes unnecessary secondary render cycles, creating performance overhead because `setData` serializes data over the JS-to-Native bridge.
**Action:** Pass derived state directly via inline properties in WXML (e.g., `data="{{listLength: list.length}}"`) or evaluate it directly in WXML logic (`wx:if="{{list.length > 0}}"`). When passing to a `<template>`, ensure the assigned key is used to respect variable scoping.
