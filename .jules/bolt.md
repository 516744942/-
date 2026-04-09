
## $(date +%Y-%m-%d) - Prevent Secondary Renders on Derived State
**Learning:** In WeChat Mini Programs, setting derived state (like array lengths) inside a component property's `observer` via `setData` causes an unnecessary secondary render cycle.
**Action:** Instead of observing properties to update derived state using `setData`, compute the derived state directly in WXML templates (e.g. `{{list.length}}`) or pass it as inline properties to `<template>` via `data="{{listLength: list.length}}"`.
