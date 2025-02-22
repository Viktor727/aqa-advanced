const array = [10, 20, 30, 40, 50];
const sum = array.reduce((currentSum, currentNumber) => {
  return currentSum + currentNumber;
}, 0);

console.log(sum);