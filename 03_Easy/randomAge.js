/*
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

Example Output:

Teddy is 69 years old!
*/


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var age;

age = String(getRandomArbitrary(20, 200));
console.log('Teddy is ' + age + ' years old!');
