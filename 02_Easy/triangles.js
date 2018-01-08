/*
Right Triangles
Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
*/

function triangle(length) {
  var i;

  //ES6
  for (i = 1; i <= length; i++) {
    console.log(' '.repeat(length - i) + '*'.repeat(i));
  }

  //ES5
  for (i = 1; i <= length; i++) {
    console.log(Array(length - i + 1).join(' ') + Array(i + 1).join('*'));
  }
}
triangle(5);
triangle(9);
