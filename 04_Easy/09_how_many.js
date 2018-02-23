/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

Example:
*/

function countOccurrences(array) {
  var result = {};

  array.forEach(function (element) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });

  logOccurances(result);
}

function logOccurances(object) {
  Object.keys(object).forEach(function (key) {
    console.log(String(key) + ' => ' + String(object[key]));
  })
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
/*
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
