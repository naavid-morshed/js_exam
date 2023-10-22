var str = "       dsf        sdf     sdf  asdf.    ";
var newStr = "";
console.log(str);

for(var count = 0; count < str.length; count++){
    if(count < str.length - 1){
        if(str.charAt(count) == " "  && str.charAt(count + 1) == " "){
        }else{
            newStr = newStr.concat(str.charAt(count));
        }
    }
}
newStr = newStr.trim();

console.log(newStr);