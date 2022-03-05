function select_sort(arr) {
  let element = arr[0]
  let idx = 0;
  
  for(let i=0; i<arr.length;i++){
    if(arr[i] < element) {
    element = arr[i]
    idx = i
   }
  }
  return idx
}

const arr = [6,1,4,8,181]
console.log(select_sort(arr))
