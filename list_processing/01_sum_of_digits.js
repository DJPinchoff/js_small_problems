/*
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

Examples:
*/
function sum(num) {
  return String(num).split('').reduce(function (acc, stringDigit) {
    return Number(acc) + Number(stringDigit);
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
