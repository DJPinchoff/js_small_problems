// Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

function logOddNumbers() {
  var i;

  for (i = 1; i < 100; i += 2) {
    console.log(i);
  }
}

function logUserOddNumbers() {
  var start = Number(prompt("Enter a starting number:"));
  var end = Number(prompt("Enter an ending number:"));
  var i;

  for (i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

logOddNumbers();
logUserOddNumbers();
