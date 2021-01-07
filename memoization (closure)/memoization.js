const memoizedClosureTimes10 = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Cache:", n);
      return cache[n];
    } else {
      let result = n * 10;
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log("Calculated", memoClosureTimes10(9));
console.log("Cached:", memoClosureTimes10(9));
