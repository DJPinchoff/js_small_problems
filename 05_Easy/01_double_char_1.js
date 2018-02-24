/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:
*/

function repeater(string) {
  var resultString = '';

  string.split('').forEach(function (letter) {
    resultString += letter + letter;
  });

  return resultString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
