// JavaScript Math trunc()

// The trunc() method truncates (shortens) a number and returns its integer portion.

// Example
let number = Math.trunc("420.56");
console.log(number);  // Output: 420

/*
========== trunc() Parameter
- The trunc() method takes a single parameter:
  - number - value that needs to be truncated (shortened to integer)

========== trunc() Return Value
- The trunc() method returns:
  - integer part of a number
  - NaN (Not a Number) for a non-numeric argument

*/

// Example 1: JavaScript Math.trunc()
// trunc() with a negative number
let number1 = Math.trunc(-50.456);
console.log(number1); // -50

// trunc() with a positive number
let number2 = Math.trunc(18.645);
console.log(number2); // 18

/*
- Note: The trunc() method does not round off a number, it just removes the digits after 
the decimal point and returns the integer portion.

*/


// Example 2: JavaScript Math.trunc() with Numeric String
// trunc() with a numeric string
let number3 = Math.trunc("15.645");
console.log(number3);  //Output:15


let string = "Luke";
// trunc() with string argument
let value = Math.trunc(string);
console.log(value);  // Output: NaN

