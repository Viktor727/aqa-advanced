const number = 5;

const multiplicationTableFor = (number) => {
  console.log("Tablet with using FOR: ");

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

const multiplicationTableWhile = (number) => {
  console.log("\n\nTablet with using WHILE: ");

  let i = 1;

  while (i <= 10){
    console.log(`${number} x ${i} = ${number * i}`);
    i++
  }
};

multiplicationTableFor(number);
multiplicationTableWhile(number);