## 2024-05-24 - [Remove redundant setData in observers]
**Learning:** Setting derived state (like list length) inside property observers using setData triggers a redundant secondary render cycle in WeChat Mini Programs and adds unnecessary bridge serialization overhead.
**Action:** Compute derived state directly in WXML templates (e.g. {{list.length}}) or pass it as inline properties (e.g. data="{{listLength: list.length}}") when using templates, and remove the setData calls from component observers.
