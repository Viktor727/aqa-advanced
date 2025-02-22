const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];

  if (element === 0) {
    zeroCount++;
  } else if (element > 0) {
    positiveCount++;
  } else if (element < 0) {
    negativeCount++;
  }
}

console.log(
  `Кількість нульових чисел: ${zeroCount};\nКількість негативних чисел: ${negativeCount};\nКількість позитивних чисел: ${positiveCount};`
);
