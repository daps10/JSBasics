// JavaScript Math.sqrt()

// The sqrt() method computes the square root of a specified number and returns it.

// Example
// square root of 4
let number = Math.sqrt(4);
console.log(number); // Output: 2

/*
============= sqrt() Parameter
- The sqrt() method takes a single parameter:
  - number - value whose square root is to be calculated

============= sqrt() Return Value
- The sqrt() method returns:
  - the square root of a given positive integer or decimal number
  - NaN (Not a Number) if the argument is non-numeric or negative

*/


// Example 1: JavaScript Math.sqrt()
// sqrt() with integer number
let number1 = Math.sqrt(16);
console.log(number1); // 4

// sqrt() with a floating number
let number2 = Math.sqrt(144.64);
console.log(number2); //12.026637102698325


// Example 2: sqrt() with Negative Argument
// sqrt() with negative number
let number4 = Math.sqrt(-324);
console.log(number4); // Output: NaN


// Example 3: sqrt() with Infinity Values
// sqrt() with positive infinity
let number5 = Math.sqrt(Infinity);
console.log(number5);  // Output: Infinity

// sqrt() with negative infinity
let number6 = Math.sqrt(-Infinity);
console.log(number6);  // Output: NaN

// Example 4: sqrt() with Numeric String
// cbrt() with a decimal number
let number7 = Math.cbrt("81");
console.log(number7); // Output: 4.326748710922225


// Example 5: sqrt() with Non-Numeric Argument
let string = "Harry";

// sqrt() with string as argument
let number8 = Math.sqrt(string);
console.log(number8); // Output: NaN