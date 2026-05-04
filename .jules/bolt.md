## 2024-03-24 - Redundant setData in property observers
**Learning:** In WeChat Mini Programs, setting a derived state (like `listLength`) inside a component property's `observer` using `this.setData` triggers an unnecessary secondary render cycle every time the property changes.
**Action:** Instead of observing array properties to set their length in data, compute derived state directly in the WXML template. For variables passed to `<template>`, evaluate them inline via `data` attributes (e.g. `data="{{...item, listLength: list.length}}"`) to prevent the redundant render overhead.
