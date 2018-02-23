/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:
*/

function isPalindromicNumber(num) {
  console.log(num.toString(10).split(''));
  return true;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(0123210));      // true
console.log(isPalindromicNumber(012321));      // false
