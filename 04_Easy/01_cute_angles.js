/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

Examples:
*/

function dms(number) {
  var degress;
  var minutesAndSeconds;
  var minutes;
  var seconds;
  var resultString;

  degrees = parseInt(String(number));
  minutesAndSeconds = (number - degrees) * 60;
  minutes = parseInt(String(minutesAndSeconds));
  seconds = parseInt(String((minutesAndSeconds - minutes) * 60));

  resultString = formatString(degrees, minutes, seconds);

  return resultString;
}

function formatString(degrees, minutes, seconds) {
  var i;
  minutes = Math.abs(minutes);
  seconds = Math.abs(seconds);

  for (i = 0; i < arguments.length; i += 1) {
    if (String(arguments[i]).length < 2) {
      arguments[i] = '0' + String(arguments[i]);
    } else {
      arguments[i] = String(arguments[i]);
    }
  }

  return degrees + '\xB0' + minutes + "'" + seconds + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-33.333));
console.log(dms(-33));
console.log(dms(-93.034773));
console.log(dms(-30));
