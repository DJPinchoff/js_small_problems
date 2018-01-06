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

function logInBox(string) {
  console.log('+-' + Array(string.length + 1).join('-') + '-+');
  console.log('| ' + Array(string.length + 1).join(' ') + ' |');
  console.log('| ' + string + ' |');
  console.log('| ' + Array(string.length + 1).join(' ') + ' |');
  console.log('+-' + Array(string.length + 1).join('-') + '-+');
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
