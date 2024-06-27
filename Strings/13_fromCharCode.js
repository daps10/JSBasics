// JavaScript String fromCharCode()

// The fromCharCode() method returns a string created from the specified 
// sequence of UTF-16 code units.

// Example
let string1 = String.fromCharCode(72, 69, 76, 76, 79);

// printing the equivalent characters
console.log(string1); // HELLO

/*
======= fromCharCode() Parameters
- num1, ..., numN - A sequence of UTF-16 code units (numbers between 0 and 65535). 
Numbers greater than 65535 (0xFFFF) are truncated.

======= fromCharCode() Return Value
- Returns a string of length N consisting of the N specified UTF-16 code units.

*/

// Example 2: Using fromCodePoint() Method With Hexadecimal Value
// numbers can be passed as a hexadecimal value
let string2 = String.fromCharCode(0x2017);

console.log(string2);  // ‗

/*
- In the above example, we have passed a hexadecimal value 0x2017 whose decimal equivalent 
is 8215. The unicode point value 8215 is converted to a character ‗.

*/