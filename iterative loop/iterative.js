function joinElements(array, joinString) {
  let resultSoFar = "";

  for (let i = 0; i <= array.length - 1; i++) {
    resultSoFar += array[i] + joinString;
  }

  return resultSoFar + array[array.length - 1];
}

joinElements(["s", "cr", "t cod", " :) :)"], "e");
