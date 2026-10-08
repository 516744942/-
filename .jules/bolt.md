## 2024-05-24 - Empty observers
**Learning:** Empty `observer` functions in WeChat Mini Program components cause unnecessary bridge communication overhead when properties change, slowing down rendering.
**Action:** Remove empty observer functions from component properties.
