var arr = new Array(5,0,-2,5,-6,-5,-1,4,5,6,-19);
var newArr = new Array();
// need better solution
for(var count = 0;count < arr.length; count++){
    if(arr[count] >= 0){
        newArr.push(arr[count]);
    }
}

for(var count = 0; count < newArr.length; count++){
    console.log(newArr[count]);
}