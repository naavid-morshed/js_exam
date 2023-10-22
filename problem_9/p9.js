function returnResponse(number){
    if(number % 10 == 0){
        return true;
    }
    return false;
}

var number = 31;

console.log(returnResponse(number));