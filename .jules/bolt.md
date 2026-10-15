## 2026-10-15 - WeChat Mini Program: Avoid Unnecessary Observers and setData
**Learning:** In WeChat Mini Programs, empty observer functions or observers that only set derived state (like array length) via `setData` trigger expensive cross-layer bridge serialization. Computed state should be handled directly in WXML or inline `data` bindings.
**Action:** Always clean up dead-code observers and compute derived state directly in WXML instead of triggering secondary render cycles via `setData`.
