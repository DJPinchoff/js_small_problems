/*
Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Examples:
*/

function palindromes(string) {
  var allSubStrings = substrings(string);

  return allSubStrings.filter(function (subStr) {
    return subStr.length !== 1 &&
           subStr === subStr.split('').reverse().join('');
  })
}

function substrings(string) {
  var result = [];

  string.split('').forEach(function (letter, index, array) {
    string.split('').forEach(function (letter2, index2, array2) {
      if (index <= index2) {
        result.push(string.slice(index, index2 + 1));
      }
    })
  })

  return result;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/*
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/
console.log(palindromes('knitting cassettes'));
/* returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/
