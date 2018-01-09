/*
Clean Up the Words
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:
*/

function cleanUp(string) {
  var result = '';
  var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var i;

  for (i = 0; i < string.length; i++) {
    if (alpha.includes(string[i])) {
      result += string[i];
    } else {
      if (result[result.length - 1] === ' ') {
        ;
      } else {
        result += ' ';
      }
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
