/*
Grade Book
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:
*/

function getGrade(...tests) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var avg = tests.reduce(reducer) / tests.length;
  var grade;

  if (avg >= 90) {
    grade = 'A';
  } else if (avg >= 80) {
    grade = 'B';
  } else if (avg >= 70) {
    grade = 'C';
  } else if (avg >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
