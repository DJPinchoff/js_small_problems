/*
Tip Calculator
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

var bill = prompt('What is the bill?');
var tipPercentage = prompt('What is the tip percentage?');
var tip = Number(bill * (tipPercentage / 100));
var total = Number(tip + Number(bill));

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));
