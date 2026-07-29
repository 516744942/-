
## 2026-07-29 - Prevent Redundant setData in Observers
**Learning:** Using setData inside a component property's observer for derived state (like array lengths) triggers redundant secondary render cycles in WeChat Mini Programs. Sometimes these data block initializations serve as UI hacks to prevent empty-state flashing prior to async loading.
**Action:** Avoid setData in observers by using computed inline properties in WXML (e.g., data="{{listLength: list.length}}"). If the initialization must be preserved to prevent visual regressions, compute the fallback value and wrap the setData call in a strict equality check (e.g., if (this.data.listLength !== newLength)) to prevent redundant renders.
