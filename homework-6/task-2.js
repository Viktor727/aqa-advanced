const fullAgeCheck = (age) => {
  return age >= 18;
}

console.log(`${fullAgeCheck(25) ? 'Особа доросла' : 'Особа не досягла віку'}`);
console.log(`${fullAgeCheck(15) ? "Особа доросла" : "Особа не досягла віку"}`);