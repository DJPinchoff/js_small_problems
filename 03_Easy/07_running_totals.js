/*
Running Totals
Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

Examples:
*/

function runningTotal(array) {
  return array.map(function (element, index) {
    return array.slice(0, index + 1).reduce(function (acc, value) {
      return acc + value;
    });
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
