/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:
*/

function multiplyAllPairs(arr1, arr2) {
  var result = [];

  arr1.forEach(function (outerNum) {
    arr2.forEach(function (innerNum) {
      result.push(outerNum * innerNum);
    })
  })

  return result.sort(numericSort);
}

function numericSort(a, b) {
  return a - b;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
