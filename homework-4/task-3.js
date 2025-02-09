// Завдання 3: Числа та булі

// Створіть змінну яка буде символізувати вік певної персони.
// Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної.
// Виведіть усі змінні в консоль

const user = { 
  name: "John", 
  surname: "Trump", 
  age: 18
}

const EnoughOldPerson = user.age >= 18;

console.log(`Is ${user.name} ${user.surname} full age? `, EnoughOldPerson ? "Yes, he is" : "No, he isn't");