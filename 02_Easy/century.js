/*
What Century is That
Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:
*/

function century(year) {
  var result = '';
  var century = parseInt(year / 100, 10) + 1;
  var onePlace;
  var tenPlace;

  if (year % 100 === 0) {
    century -= 1;
  }

  result += String(century);

  onePlace = century % 10;
  tenPlace = century % 100;

  switch (onePlace) {
    case 1:
      result += 'st';
      break;
    case 2:
      result += 'nd';
      break;
    case 3:
      result += 'rd';
      break;
    default:
      result += 'th';
  }

  if (tenPlace > 10 && tenPlace < 14) {
    result = String(century) + 'th';
  }

  return result;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
