// JavaScript String charCodeAt()

// The charCodeAt() method returns an integer between 0 and 65535 representing the 
// UTF-16 code unit at the given index.

// Example
const greeting = "Good morning!";

// UTF-16 code unit of character at index 5
let result = greeting .charCodeAt(5);
console.log(result); // Output: 109

/*
======= charCodeAt() Parameters
- index - An integer between 0 and (str.length - 1).

======= charCodeAt() Return Value
- Returns a number representing the UTF-16 code unit 
value of the character at the given index.

*/

// Example 1: Using charCodeAt() Method
const greeting1 = "Good morning!";

// UTF-16 code unit of character at index 5
let result1 = greeting1 .charCodeAt(5);
console.log(result1); // 109

// UTF-16 code unit of character at index 5.2
let result2 = greeting1 .charCodeAt(5.2);
console.log(result2); // 109

// UTF-16 code unit of character at index 5.9
let result3 = greeting1.charCodeAt(5.9);
console.log(result3); // 109

/*
- In the above example, we are using the charCodeAt() method to access the UTF-16 code 
unit of the character at index 5.
- Since the character present at index 5 is "m", the method returns UTF-16 code unit of 
"m".
- Similarly, for the non-integer index 5.2 and 5.9, the numbers are converted to nearest 
integer value i.e. 5, so the method again returns UTF-16 code unit of "m" i.e. 109.

*/


// Example 2: charCodeAt() Method for Index Out of Range
const greeting2 = "Good morning!";

// passing index greater than length of string 
let result4 = greeting2.charCodeAt(18);
console.log(result4); // NaN

// passing non-negative index value
let result5 = greeting2.charCodeAt(-9);
console.log(result5); //// NaN

/*
- Here, both the code greeting.charCodeAt(18) and greeting.charCodeAt(-9) returns NaN because 
both indexes 18 and -9 are not present in the given string.

*/