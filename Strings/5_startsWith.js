// Javascript String startsWith()

// The startsWith() method returns true if a string begins with 
// specified character(s). If not, it returns false.

// Example
const message = "JavaScript is fun";

// check if message starts with Java
let result = message.startsWith("Java");
console.log(result);    // true

// check if message starts with Script
result = message.startsWith("Script");
console.log(result);    // false

/*
===== startsWith() Parameters
- searchString - The characters to be searched for at the beginning of str.

- position (optional) - The position in str to start searching for searchString. 
Default value is 0.


===== startsWith() Return Value
- Returns true if the given characters are found at the beginning of the string.
- Returns false if given characters are not found at the beginning of the string.

*/

let sentence = "Java is to JavaScript what Car is to Carpet.";
let check = sentence.startsWith("Java");
console.log(check); // true

let check1 = sentence.startsWith("Java is");
console.log(check1); // true

// second argument specifies the starting position
let check3 = sentence.startsWith("javaScript", 11);
console.log(check3); // true
let check4 = sentence.startsWith("javaScript", 11);
console.log(check4); // false
