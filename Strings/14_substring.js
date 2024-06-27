// Javascript String substring()

// The substring() method returns a specified part of the string between start and end 
// indexes.

// Example
const message = "JavaScript is fun.";

// get the substring starting from index 0 to 10
let result = message.substring(0, 10);
console.log(result); // Output: JavaScript

/*
========= substring() Parameters
- indexStart - The index of the first character to start including in the returned substring.
- indexEnd (optional) - The index before which to stop extraction. (Exclusive) If omitted, 
it extracts till the end of the string.

========= substring() Return Value
- Returns a new string containing the specified part of the given string.

*/


// Example 2: Replacing a substring within a string
const replaceString = (oldChars, newChars, string) => {
  for (let i = 0; i < string.length; i++) {
    if(string.substring(i, i + oldChars.length) === oldChars) {
      string = string.substring(0, i) + newChars + string.substring(i + oldChars.length, string.length);
    }
  }
  return string;
}

const string = "Java Tutorials";
let newString = replaceString("Java", "JavaScript", string);
console.log(newString); // JavaScript Tutorials