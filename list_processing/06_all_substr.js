/*
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:

Example:
*/
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


console.log(substrings('abcde'));

/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
