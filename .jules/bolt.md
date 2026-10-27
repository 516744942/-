## 2026-10-27 - Optimize WeChat Mini Program setData in Observers
**Learning:** In WeChat Mini Programs, using `setData` inside a component property's observer for derived state (like array lengths) triggers redundant serialization and secondary render cycles across the logical/view bridge. Furthermore, even empty observers add watcher registration overhead.
**Action:** Pass derived state directly in WXML templates (e.g. `data="{{...item, listLength: list.length}}"`) or compute it inline. Actively remove empty observer functions during refactoring to minimize bridge overhead.
