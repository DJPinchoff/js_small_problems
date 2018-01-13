/*
When Will I Retire
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

var age = Number(prompt('What is your age?'));
var retirementAge = Number(prompt('At what age would you like to retire?'));
var years = retirementAge - age;
var year = new Date().getFullYear();
var retirementYear = year + years;

console.log("It's " + year + '. You will retire in ' + retirementYear + '.');
console.log('You have only ' + years + ' years of work to go!');
