## 2026-07-31 - [Avoid redundant setData in WXML observers]
**Learning:** Codebase components (like rowscroll) use setData inside a property observer to set derived state (like array lengths). This causes redundant secondary render cycles.
**Action:** Pass derived state directly as inline computed properties in WXML templates (e.g., data="{{...item, listLength: list.length}}") to avoid double rendering.
