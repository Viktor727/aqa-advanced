const array = [1, 2, 3, 4, 5];
let newArray = []

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  newArray.push(element * i);
}

console.log(newArray);