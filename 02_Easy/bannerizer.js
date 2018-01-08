/*
Bannerizer
Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');
will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
logInBox('');
+--+
|  |
|  |
|  |
+--+
*/
/* ES5
function logInBox(string) {
  console.log('+-' + Array(string.length + 1).join('-') + '-+');
  console.log('| ' + Array(string.length + 1).join(' ') + ' |');
  console.log('| ' + string + ' |');
  console.log('| ' + Array(string.length + 1).join(' ') + ' |');
  console.log('+-' + Array(string.length + 1).join('-') + '-+');
}
*/
// ES6
function logInBox(string) {
  
  console.log('+-' + ('-').repeat(string.length) + '-+');
  console.log('| ' + (' ').repeat(string.length) + ' |');
  console.log('| ' + string + ' |');
  console.log('| ' + (' ').repeat(string.length) + ' |');
  console.log('+-' + ('-').repeat(string.length) + '-+');
}
logInBox('To boldly go where no one has gone before.');
logInBox('');
