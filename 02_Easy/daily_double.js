/*
Ddaaiillyy ddoouubbllee
Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:
*/

function crunch(string) {
  var result = '';
  var i;

  for (i = 0; i < string.length; i++) {
    if (result[result.length - 1] !== string[i]) {
      result += string[i];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
