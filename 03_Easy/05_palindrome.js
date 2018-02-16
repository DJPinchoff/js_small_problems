/*
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:
*/

function isRealPalindrome(string) {
  let filteredString = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (string[i].match(/[A-z]|[0-9]/)) {
      filteredString += string[i].toLowerCase();
    }
  }

  return isPalindrome(filteredString);
}

function isPalindrome(string) {
  var i;
  let maxIndex = string.length - 1;

  for (i = 0; i <= maxIndex; i += 1) {
    if (string[i] !== string[maxIndex - i]) {
      return false;
    }
  }

  return true;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
