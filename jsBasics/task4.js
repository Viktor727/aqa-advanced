// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const task1 = (radius) => {
  return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}
console.log(task1(10));

const task2 = (length, width) => {
  return (length * width).toFixed(2);
}
console.log(task2(10, 10));

const task3 = (radius, height) => {
  return (Math.PI * Math.pow(radius, 2) * height).toFixed(2);
}
console.log(task3(10, 10));