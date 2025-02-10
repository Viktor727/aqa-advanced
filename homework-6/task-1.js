// Function Arrow
const calculateAreaFirst = (width, height) => {
    return width * height;
}
console.log(calculateAreaFirst(5, 10));

// Function Declaration
function calculateAreaSecond(width, height){
  return width * height;
};
console.log(calculateAreaSecond(5, 10));


// Function Expression
const calculateAreaThird = function(width, height){
    return width * height;
}
console.log(calculateAreaSecond(5, 10));