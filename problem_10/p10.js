var vowelCount = 0;
var str = "aeoiubnvbxcmxniuo"

for(var count = 0; count < str.length; count++){
    if(str.charAt(count) == 'a' || str.charAt(count) == 'e' || str.charAt(count) == 'i' || str.charAt(count) == 'o' || str.charAt(count) == 'u'){
        vowelCount++;
    }
}

console.log("Total number of vowels in given str: " + vowelCount);