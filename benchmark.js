const { performance } = require('perf_hooks');

// Generate mock data
const cityData = [];
for (let i = 0; i < 30; i++) {
  const p = { name: `Province ${i}`, c_list: [] };
  for (let j = 0; j < 20; j++) {
    const c = { name: `City ${j}`, d_list: [] };
    for (let k = 0; k < 20; k++) {
      c.d_list.push({ name: `County ${k}` });
    }
    p.c_list.push(c);
  }
  cityData.push(p);
}

function original() {
  const provinces = [];
  const citys = [];
  const countys = [];
  for (let i = 0; i < cityData.length; i++) {
    provinces.push(cityData[i].name);
  }
  for (let i = 0; i < cityData[0].c_list.length; i++) {
    citys.push(cityData[0].c_list[i].name)
  }
  for (let i = 0; i < cityData[0].c_list[0].d_list.length; i++) {
    countys.push(cityData[0].c_list[0].d_list[i].name)
  }
  return { provinces, citys, countys };
}

function optimized() {
  const provinces = [];
  const citys = [];
  const countys = [];

  const len = cityData.length;
  for (let i = 0; i < len; i++) {
    provinces.push(cityData[i].name);
  }

  const c_list = cityData[0].c_list;
  const c_len = c_list.length;
  for (let i = 0; i < c_len; i++) {
    citys.push(c_list[i].name)
  }

  const d_list = c_list[0].d_list;
  const d_len = d_list.length;
  for (let i = 0; i < d_len; i++) {
    countys.push(d_list[i].name)
  }

  return { provinces, citys, countys };
}

// Warm up
for (let i = 0; i < 10000; i++) {
  original();
  optimized();
}

const iterations = 500000;

const startOriginal = performance.now();
for (let i = 0; i < iterations; i++) {
  original();
}
const endOriginal = performance.now();

const startOptimized = performance.now();
for (let i = 0; i < iterations; i++) {
  optimized();
}
const endOptimized = performance.now();

console.log(`Original: ${(endOriginal - startOriginal).toFixed(2)} ms`);
console.log(`Optimized: ${(endOptimized - startOptimized).toFixed(2)} ms`);
const improvement = ((endOriginal - startOriginal) - (endOptimized - startOptimized)) / (endOriginal - startOriginal) * 100;
console.log(`Improvement: ${improvement.toFixed(2)}%`);
