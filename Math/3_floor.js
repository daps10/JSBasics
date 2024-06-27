// JavaScript Math floor()

// The Math.floor() function rounds down a number to the next smallest integer.

// Example
let number = 38.8;

// round number to nearest smallest number
let roundedNumber = Math.floor(number);
console.log(roundedNumber); // Output: 38

/*
========= Math.floor() Parameters
- The Math.floor() function takes in:
  - x - A number

========= Math.floor() Return Value
- Returns the largest integer less than or equal to a given number.
- Returns 0 for null.

*/


// Example: Using Math.floor()
// using Math.floor()

var num = Math.floor(1.8645);
console.log(num); // 1

var num = Math.floor(-0.456);
console.log(num); // -1

var num = Math.floor("4");
console.log(num); // 4

// Returns 0 for null
var num = Math.floor(null);
console.log(num); // 0

// Returns NaN for non-numeric types
var num = Math.floor("JavaScript");
console.log(num); // NaN

var num = Math.floor(NaN);
console.log(num); // NaN