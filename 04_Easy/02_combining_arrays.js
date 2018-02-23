/*
Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are Duplication in the original arrays. You may assume that both arguments will always be arrays.

Example:
*/

function union(array1, array2) {
  var result = [];

  addElementsToArrayWithoutDuplication(array1, result);
  addElementsToArrayWithoutDuplication(array2, result);

  return result;
}

function addElementsToArrayWithoutDuplication(input, output) {
  input.forEach(function (element) {
    if (output.indexOf(element) < 0) {
      output.push(element);
    }
  })
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
