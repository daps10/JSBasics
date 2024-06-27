// JavaScript Math ceil()

// The ceil() method rounds a decimal number up to the next largest integer and returns it. 
// That is, 4.3 will be rounded to 5 (next largest integer).

// Example
let number = Math.ceil(4.3);
console.log(number);  // Output: 5

/*
========== ceil() Parameter
- The ceil() method takes in a single parameter:
  - number - value that is rounded off to its nearest largest integer

========== ceil() Return Value
- The ceil() method returns:
  - the nearest largest integer after rounding off the specified number

*/

// Example 1: JavaScript Math.ceil() with Positive Numbers
let result1 = Math.ceil(23.8);
console.log(result1); // Output: 24

let result2 = Math.ceil(87.1);
console.log(result2); // Output: 88

// Example 2: Math.ceil() with Negative Numbers
let result3 = Math.ceil(-3.8);
console.log(result3);    // Output: -3

let result4 = Math.ceil(-7.1);
console.log(result4);  // Output:  -7

/*
- Here, Math.ceil() rounds the number -3.8 to -3 because mathematically, -3 is larger than -3.8. 
Similarly, the method rounds -7.1 to -7.

*/


// Example 3: Math.ceil() with Numeric String
// ceil() with a numeric string
let number3 = Math.ceil("2.490");
console.log(number3);  // Output: 3
/*
- Here, we have used the numeric string "2.490" with the ceil() method. In this case, 
the numeric string is converted to a number.

*/

// ceil() with string as argument
let value = Math.ceil("JavaScript");
console.log(value);
// Output: NaN
/*
- In the above example, we have tried to calculate the sign of the string "JavaScript". Hence, 
we get NaN as the output.

*/
