// JavaScript String lastIndexOf()

// The lastIndexOf() method returns the last index of occurence of a 
// given substring in the string.

// Example
// defining a string
var str = "Programming";

var substr = "g";

// find last occurrence of "g" in str
var result = str.lastIndexOf(substr);

console.log(result); // Output: 10

/*
===== lastIndexOf() Parameters
- The lastIndexOf() method takes in:
  - substr- The value to search for in the given string.
  - fromIndex (optional) - The index to start searching the string backwards. By 
  default it is +Infinity.

===== lastIndexOf() Return Value
- The lastIndexOf() method returns:
  - the last index of the value in the string if it is present at least once.
  - fromIndex if no string is provided explicitly.

*/


// Example 2: lastIndexOf() With Two Parameters
// defining a string
var str = "Programming";

// defining a substring 'substr' that holds character 'g'
var substr = "g";
var fromIndex = 6;

// passing second parameter 'fromIndex' in lastIndexOf()
var result = str.lastIndexOf(substr, fromIndex);

console.log(result); // 3


// Example 4: lastIndexOf() For Case-Sensitive Search
var str = "I love JavaScript";

//  lastIndexOf() with "JavaScript" as  substr
var result1 = str.lastIndexOf("JavaScript");

console.log(result1); // 7

//  lastIndexOf() with "javaScript" as  substr
var result2 = str.lastIndexOf("javaScript");

console.log(result2); // -1

/*
- Here, the lastIndexOf() method is case sensitive, so it treats "JavaScript" and "javaScript" 
as two different substr.

*/