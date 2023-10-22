var arr = new Array(4, 5, 3, 2, 1, 8, 1);
var sortedArray = new Array();
// var lowest = arr[0];
var temp;

// for (var count = 0; count < arr.length; count++) {
//   console.log(arr[count]);
// }

for (var counter = 0; counter < arr.length; counter++) {
  console.log("outer loop : " + counter);
  for (var count = counter; count < arr.length; count++) {
    console.log("inner loop : " + count);
    if (arr[counter] > arr[count]) {
      console.log("inner condition : " + counter + ", " + count);
      temp = arr[count];
      arr[count] = arr[counter];
      arr[counter] = temp;
    }
  }
}

for (var count = 0; count < arr.length; count++) {
  console.log(arr[count]);
}
