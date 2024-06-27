// Javascript String endsWith()

// The endsWith() method returns true if a string ends with the specified 
// string. If not, the method returns false.

// Example
// string definition 
let sentence = "Java is to JavaScript what Car is to Carpet.";

// checking if the given string ends with "to Carpet."
let check = sentence.endsWith("to Carpet.");
console.log(check);   // true

/*
====== endsWith() Parameters
- The endsWith() method takes two parameters:
  - searchString - The characters to be searched for at the end of str.
  - length (optional) - It is used as the length of str where searchString 
  is searched. Default value is str.length.

====== endsWith() Return Value
- The endswith() method returns:
  - true - if the given characters are found at the end of the string.
  - false - if given characters are not found at the end of the string.

*/

// Example 2: endsWith() for Case Sensitive Strings
let sentence1 = "JavaScript is fun";
// checking if the given string ends with "fun"
let check3 = sentence1.endsWith("fun");
console.log(check3); // true

// checking if the given string ends with "Fun"
let check4 = sentence1.endsWith("Fun");
console.log(check4); // false


// Example 3: endsWith() with two Parameters
let sentence3 = "JavaScript is fun";

// second argument specifies the portion of string to consider
let check5 = sentence3.endsWith("JavaScript", 10);
console.log(check5); // true