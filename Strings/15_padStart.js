// Javascript String padStart()

// The padStart() method pads the current string with another string to the start.

// string definition
let string1 = "CODE";

// padding "*" to the start of given string
// until the length of final padded string reaches 10
let paddedString = string1.padStart(10, "*");
console.log(paddedString); // Output: ******CODE

/*
======= padStart() Parameters
- The padStart() method takes two parameters:
  - targetLength - The length of the final string after the current string has been 
  padded.
  - padString (optional) - The string to pad the current string with. Its default 
  value is " ".

- If padString is too long, it will be truncated from the end to meet targetLength.

======= padStart() Return Value

- Returns a String of the specified targetLength with padString applied from 
the start.

*/

// Example 2: Using Multiple Character padString in padStart()
// string definition 
let string2 = "CODE";

// padding 'JavaScript' to the start of the string
// until the length of padded string reaches 17
let  paddedString2= string2.padStart(17, 'JavaScript');
console.log(paddedString2); // JavaScriptJavCODE

/*
- The method adds "JavaScript" to the start of "CODE" until the length of the final 
string becomes 17. That is, paddedString2 returns the final string "JavaScriptJavCODE" 
whose length is 17.

*/
