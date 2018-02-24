/*
Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

Example:
*/

function buyFruit(array) {
  var result = [];
  var i;

  array.forEach(function (element) {
    for (i = 1; i <= element[1]; i += 1) {
      result.push(element[0]);
    }
  })

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
