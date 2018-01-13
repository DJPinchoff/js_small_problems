/*

210 - Small ProblemsEasy 3Searching 101
Give us your feedback
Searching 101
Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.
*/

var numbers = [];
var number;

numbers.push(Number(prompt('Enter the first number: ')));
numbers.push(Number(prompt('Enter the second number: ')));
numbers.push(Number(prompt('Enter the third number: ')));
numbers.push(Number(prompt('Enter the fourth number: ')));
numbers.push(Number(prompt('Enter the fifth number: ')));
number = Number(prompt('Enter a number to search: '));

if (numbers.includes(number)) {
  console.log('The number ' + String(number) + ' appears in [' + String(numbers) + ']');
} else {
  console.log('The number ' + String(number) + ' does not appear in [' + String(numbers) + ']');
}
