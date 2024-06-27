// JavaScript String indexOf()

// The string indexOf() method returns the index of the first occurence of the 
// substring in a string.

// Example
const message = "JavaScript is not Java";

// returns index of 'v' in first occurrence of 'va'
const index = message.indexOf("va");

console.log('index: ' + index);  // index: 2

/*
====== indexOf() Parameters
- searchValue - The value to search for in the string. If no string is provided explicitly,
"undefined" will be searched.
- fromIndex (optional) - The index to start the search at. By default it is 0. If fromIndex 
< 0, the search starts at index 0.

====== indexOf() Return Value
- Returns the first index of the value in the string if it is present at least once.
- Returns -1 if the value is not found in the string.

*/


// Example 2: Finding All the Occurrences of an Element
const findAllIndex= (string,val) => {
  let indices= [];
  var currIndex= string.indexOf(val);

  while(currIndex !== -1) {
    indices.push(currIndex);
    currIndex= string.indexOf(val, currIndex + val.length);
  }
  return indices;
}

var strz = "JavaScript is as related to Java as Carpenter is to Carpet.";
var occurance1 = findAllIndex(strz, "J");
console.log(occurance1); // [ 0, 28 ]

var occurance2 = findAllIndex(strz, "Carpet");
console.log(occurance2); // [ 52 ]

var occurance3 = findAllIndex(strz, "x");
console.log(occurance3); // []
