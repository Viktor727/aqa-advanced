const array = [1, 2, 3, 4, 5];
let newArray = []

array.map((element, i) => {
  newArray.push(element * i)
});

console.log(newArray);