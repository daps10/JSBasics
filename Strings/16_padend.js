// Javascript String padEnd()

// The padEnd() method pads the current string with another string to the end.

// Example
let string1 = "CODE";

// padding "*" to the end of the given string
// until the length of final padded string reaches 10
let paddedString = string1.padEnd(10, "*");
console.log(paddedString); // Output: CODE******

/*
======== padEnd() Parameters
- targetLength - The length of the final string after the current string has been 
padded.
- padString (optional) - The string to pad the current string with. Its default 
value is " ".

======== padEnd() Return Value

- Returns a string of the specified targetLength with padString applied to the end 
of the current string.

*/

// string definition 
let string2 = "CODE";

// padding 'JavaScript' to the end of the string
//  until the length of padded string reaches 17
let  paddedString2= string2.padEnd(17, 'JavaScript');
console.log(paddedString2); // CODEJavaScriptJav

/*
- The method adds "JavaScript" to the end of "CODE" until the length of the final string 
becomes 17. So paddedString2 returns the final string "CODEJavaScriptJav" whose length 
is 17.

*/


// Example 3: Using a Long padString in padEnd()
// The padEnd() method truncates the passed long padString to meet targetLength. For example:

// string definition 
let string3 = "CODE";

// the passed padString is truncated to meet the target length
paddedString3= string3.padEnd(10, "ABCDEFGHIJKL");
console.log(paddedString3); //  CODEABCDEF


 
