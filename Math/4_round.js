// JavaScript Math round()

// The Math.round() function returns the number rounded to the nearest integer. 
// That is, 3.87 is rounded to 4 and 3.45 is rounded to 3.

// Example
let number = 3.87;

// round the number to nearest integer
let roundedNumber = Math.round(number);
console.log(roundedNumber); // Output: 4

/*
=========== Math.round() Parameters
- The Math.round() function takes in: 
  - x - A number

=========== Return value from Math.round()
- Math.round() returns the value of the number rounded to the nearest integer as follows:
  - If the fractional portion > 0.5, x is rounded to integer with higher absolute value.
  - If the fractional portion < 0.5, x is rounded to integer with lower absolute value.
  - If the fractional portion = 0.5, x is rounded to the next integer in the direction of +∞.


*/

// Example: Using Math.round()
// using Math.round()
var num = Math.round(1.8645);
console.log(num); // 2

var num = Math.round(10.49);
console.log(num); // 10

var num = Math.round(4.5);
console.log(num); // 5

var num = Math.round(-4.5);
console.log(num); // -4

// Returns 0 for null
var num = Math.round(null);
console.log(num); // 0

// Returns NaN for non-numeric types
var num = Math.round("JavaScript");
console.log(num); // NaN