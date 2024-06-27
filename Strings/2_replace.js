// JavaScript String replace()

// The replace() method returns a new string with the specified string/regex replaced.

// Example
const message = "ball bat";

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result); // call bat
console.log(message); // ball bat


/*
======= replace() Parameter
- The replace() method takes in:
  - pattern - either a string or a regex that is to be replaced
  - replacement - the pattern is replaced with this replacement 
  (can be either a string or a function)

======= relace() Return Value
- The replace() method returns a new string with the specified 
pattern replaced.

*/


// Example 1: Replace the first occurrence
const text = "Java is awesome. Java is fun."
let pattern= 'Java';
let newText= text.replace(pattern, 'Javascript'); 
console.log(newText); // Javascript is awesome. Java is fun.

// passing a regex as the first parameter
pattern = /Java/;
newText = text.replace(pattern, "JavaScript");
console.log(newText); // JavaScript is awesome. Java is fun.


// Example 2: Replace all occurrences
const text1 = "Java is awesome. Java is fun."

const pattern1= /Java/g;
const newText1= text1.replace(pattern1, 'JavaScript');
console.log(newText1); // JavaScript is awesome. JavaScript is fun.


// Example 3: Case sensitive
const text2 = "javaSCRIPT JavaScript"

// the first occurrence of javascript is replaced
let pattern2 = /javascript/i;  // case-insensitive search
let newText2 = text2.replace(pattern2, "JS");
console.log(newText2)  // JS JavaScript

// all occurrences of javascript is replaced
pattern2 = /javascript/gi;  // case-insensitive and global search
newText2 = text2.replace(pattern2, "JS");
console.log(newText2)  // JS JS