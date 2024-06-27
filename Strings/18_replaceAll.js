
// JavaScript String replaceAll()

// The replaceAll() method returns a new string with all matches of a pattern replaced 
// by a replacement.

// Example
const message = "ball bat";

// replace all occurrence of b with c
let result = message.replaceAll('b', 'c');
console.log(result); // Output: call cat

/*
======= replaceAll() Parameter
- The replaceAll() method takes in:
  - pattern - either a substring or a regex that is to be replaced
  - replacement - the pattern is replaced with this replacement (can be either a string 
  or a function)

======= replaceAll() Return Value
- The replaceAll() method returns a new string, with all matches of a pattern replaced by a 
replacement.

*/

// Example 1: Using replaceAll()
const text = "Java is awesome. Java is fun.";

// passing a string as the first parameter
let pattern = "Java";
let new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);   // JavaScript is awesome. JavaScript is fun


// Replace Without Considering Uppercase/Lowercase

// The replaceAll() method is case sensitive. To perform the case-insensitive replacement, 
// you need to use a regex with a i switch (case-insensitive search).

// Example 2: Case-Insensitive Replacement
const text3 = "javaSCRIPT JavaScript";

// all occurrences of javascript is replaced
let pattern2 = /javascript/gi; // case-insensitive and global search
let new_text3 = text3.replaceAll(pattern2, "JS");
console.log(new_text3); // JS JS

