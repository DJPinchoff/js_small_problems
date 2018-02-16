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

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
