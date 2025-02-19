const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = []

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if(element % 2 === 0)[
    newArray.push(element)
  ]
}

console.log(newArray);