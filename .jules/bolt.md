## 2024-05-24 - Avoid redundant setData in observers
**Learning:** In WeChat Mini Programs, unconditionally calling \`setData\` inside a component property's observer (e.g. to set derived state like \`listLength\`) triggers redundant render cycles when object references update but primitive values do not.
**Action:** Always wrap \`setData\` calls in observers with strict equality checks (e.g., \`if (newVal && this.data.listLength !== newVal.length)\`) to prevent unnecessary renders, preserving intentional default \`data\` block initializations.
