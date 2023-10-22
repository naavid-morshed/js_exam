var arr = new Array(1,2,3,4,5,6);
var temp;
var otherside = arr.length - 1;
for(var count = 0; count < arr.length/2; count++){
    temp = arr[count];
    arr[count] = arr[otherside];
    arr[otherside] = temp;
    otherside--;
} 

for(var count = 0; count < arr.length; count++){
    console.log(arr[count]);
}