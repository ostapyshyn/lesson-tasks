// function filter(arr, fn) {
//   return arr.filter(fn);
// }

// alternative
function filter(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
