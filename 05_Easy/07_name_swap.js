/*
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples:
*/

function swapName(string) {
  var splitString = string.split(' ');
  var lastName = splitString[splitString.length - 1];
  var firstNames = splitString.slice(0, splitString.length - 1).join(' ');
  return lastName + ', ' + firstNames;
}

console.log(swapName('Joe James Roberts'));    // "Roberts, Joe"
