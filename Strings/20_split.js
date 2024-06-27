// JavaScript String split()

// The split() method divides a string into a list of substrings and returns them 
// as an array.

// Example
const message = "JavaScript::is::fun";

// divides the message string at :: 
let result = message.split("::");
console.log(result); // Output: [ 'JavaScript', 'is', 'fun' ]

/*
========== split() Parameter
- The split() method takes in:
  - separator (optional) - The pattern (string or regular expression) describing where each 
  split should occur.
  - limit (optional) - A non-negative integer limiting the number of pieces to split the given 
  string into.

========== split() Return Value
- Returns an Array of strings, split at each point where the separator occurs in the given string.

*/

// Example: Using split()
console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]

let pattern1 = ".";
// only split string to maximum to parts
let newText1 = text.split(pattern1, 2);
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// using RegEx
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]