let numbers = [];
for (let i = 0; i < 15; i++) {
  numbers[i] = Math.round(Math.random() * 100);
  // console.log(numbers[i]);
}

numbers.sort((a, b) => a - b);
console.log(numbers);