## 2024-05-24 - Unnecessary setData in array observer
 **Learning:** In WeChat Mini Programs, putting derived properties like length using setData directly inside an array property observer is a common performance bottleneck because it causes secondary redundant rendering operations whenever the array updates even if the length stays exactly the same.
 **Action:** Instead, compute values inside the template `{{list.length}}` or pass it inside template data parameters. If absolutely necessary, wrap inside `if (newVal && this.data.listLength !== newVal.length)` to prevent useless state cycles.
