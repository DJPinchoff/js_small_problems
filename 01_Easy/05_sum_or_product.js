/*
Sum or Product of Consecutive Integers
Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

var start = 1;
var end = Number(prompt('Please enter an integer greater than 0:'));
var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.')
var i;
var sum = 0;
var product = 1;

switch (operation) {
  case 's':
    for (i = start; i <= end; i++) {
      sum += i;
    }
    console.log('The sum of the integers between 1 and ' + String(end) + ' is ' + String(sum) + '.');
    break;

  case 'p':
    for (i = start; i <= end; i++) {
      product *= i;
    }
    console.log('The product of the integers between 1 and ' + String(end) + ' is ' + String(product) + '.');
    break;

  default:
    console.log("Try again! You didn't enter a 'p' or 's' correctly.");
}
