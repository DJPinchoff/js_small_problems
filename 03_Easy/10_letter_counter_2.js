/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:
*/
function wordSizes(string) {
  var result = {};
  var wordLength;

  string.split(' ').forEach(function (word) {
    wordLength = String(wordToOnlyLetters(word).length);

    if (wordLength === '0') { return; }

    if (result[wordLength]) {
      result[wordLength] += 1;
    } else {
      result[wordLength] = 1;
    }
  });

  return result;
}

function wordToOnlyLetters(word) {
  var result = [];

  word.split('').forEach(function (letter) {
    if (letter.match(/[a-z||A-Z]/)) { result.push(letter); }
  });

  return result.join('');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
