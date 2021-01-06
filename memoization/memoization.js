const times10 = (n) => {
  n * 10;
};

console.log("times10 returns:", times10(9));

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log(n);
    return cache[n];
  } else {
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log("Calculated value:", memoTimes10(9));
console.log("Cached value:", memoTimes10(9));
