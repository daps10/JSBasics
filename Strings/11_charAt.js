// JavaScript String charAt()

// The charAt() method returns the character at the specified index in a string.

// Example
// string declaration
const string = "Hello World!";

// finding character at index 1
let index1 = string.charAt(1);
console.log("Character at index 1 is " + index1); // Character at index 1 is e

/*
======= charAt() Parameters
- index - An integer between 0 and str.length - 1. If index cannot be converted to 
integer or is not provided, the default value 0 is used.

======= charAt() Return Value
- Returns a string representing the character at the specified index.

*/


// Example 2: A Non-integer Index Value in charAt()
const string1 = "Hello World";

// finding character at index 6.3
let result1 = string1.charAt(6.3);
console.log("Character at index 6.3 is " + result1); //  Character at index 6.3 is W

// finding character at index 6.9
let result2 = string1.charAt(6.9); 
console.log("Character at index 6.9 is " + result2); // Character at index 6.9 is W


// finding character at index 6
let result3 = string1.charAt(6);
console.log("Character at index 6 is " + result3); // Character at index 6 is W

/*
- Here, the non-integer index values 6.3 and 6.9 are converted to the nearest integer 
index 6. So both string.charAt(6.3) and string.charAt(6.9) return "W" just like 
string.charAt(6).

*/


// Example 3: Without passing parameter in charAt()
let sentence5 = "Happy Birthday to you!";

// passing empty parameter in charAt() 
let index4 = sentence5.charAt();
console.log("Character at index 0 is  " + index4); // Character at index 0 is  H

/*
- Here, we have not passed any parameter in the charAt() method. The default index value is 0 
so sentence.charAt() returns character at index 0 which is "H".

*/
