## 2024-05-24 - Avoid redundant setData in observer for array length
**Learning:** Passing derived state like array lengths through `setData` inside an `observer` triggers redundant secondary render cycles in WeChat Mini Programs. Furthermore, variables must be explicitly bound when passed into a `<template>`.
**Action:** Compute derived state directly in the WXML template (e.g. `listLength: list.length` inside `<template data="...">`) rather than setting it in the component observer.
