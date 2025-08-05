function checkProbabilityTheory(count) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (1000 - 201)) + 100; // Math.random() --> 0-1
    if (randomNumber % 2 === 0) even++;
    else odd++;
  }
  console.log(
    "Кількість згенерованих чисел: " + count,
    "\nПарних чисел: " + even,
    "\nНе парних чисел " + odd,
    "\nВідсоток парних до не парних: " +
      (even * 100) / count +
      "%, " +
      (odd * 100) / count +
      "%"
  );
}

checkProbabilityTheory(3);
function customPow(base, exponent) {
  let tmpValue = 1;
  let count = 0;
  while (count < exponent) {
    tmpValue *= base;
    count++;
  }

  return tmpValue;
}




