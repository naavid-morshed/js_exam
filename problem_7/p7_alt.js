const arr = new Array(-4, 9, -9, -5, 15, 0, -2, 5, -6, -7, -1, 4, 5, 6, -19, 1);
var removingIndex;
console.log("Total elements in array: " + arr.length);
// why is this leaving -5 out?

for (var count = 0; count < arr.length; count++) {
    debugger
console.log("Total elements in array: " + arr.length);
let x = arr[count];
  if (arr[count] < 0) {
    removingIndex = arr.indexOf(arr[count]);
    console.log("removing this num: " + arr[removingIndex]);
    arr.splice(removingIndex, 1);
    count--;
  }
}

for (var count = 0; count < arr.length; count++) {
  console.log(arr[count]);
}

console.log("Total elements in array after removal: " + arr.length);
