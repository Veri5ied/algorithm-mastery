const uniqueSort = (arr) => {
  const breadcrumbs = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]));
