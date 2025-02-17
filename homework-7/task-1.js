const number = 6;

const callbackEven = (num) => {
    return "Number is even: " + num;
}

const callbackOdd = (num) => {
    return "Number is odd: " + num;
}

const handleNum = (num, callbackEven, callbackOdd) => {
    if(num % 2 === 0){
        console.log(callbackEven(num))
    } else{
        console.log(callbackOdd(num))
    }
}; handleNum(number, callbackEven, callbackOdd)