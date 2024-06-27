// JavaScript Array lastIndexOf()

// The lastIndexOf() method returns the index of the last occurrence 
// of a specified element in the array.

let priceList = [10, 8, 2, 31, 10, 31, 65];

// finding the index of the last occurence of 31
let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex);  // Output: 5

/*
===== lastIndexOf() Parameters
- The lastIndexOf() method can take two parameters:
1. searchElement - The element to locate in the array.
2. fromIndex (optional) - The index to start searching backwards. 
By default it is array.length - 1.

===== lastIndexOf() Return Value

- The lastIndexOf() method returns:
1. the last index of the element in the array if it is present at least 
once.
2. -1 if the element is not found in the array.

*/

// Example 1: Using lastIndexOf() Method
let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");

console.log(lastIndex1);  // 3

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");

console.log(lastIndex2); // -1 -- not available

// alphabets.lastIndexOf("e") returns -1 because the array does 
// not contain 'e'.


// Example 2: lastIndexOf() with two Parameters

let alphabets1 = ["a", "b", "c", "a", "d", "a"];

// second argument specifies the starting index
// from where the method searches the element backward
let lastIndex3 = alphabets1.lastIndexOf("a", 4);

console.log(lastIndex3); // 3

/*
- In the above example, we have passed the second argument 4 in 
the lastIndexOf() method.
- alphabets.lastIndexOf("a", 4) searches the element 'a' backward 
from index 4 and returns the last occurrence of 'a' i.e. 3.

*/


// Example 3: lastIndexOf() with Negative Parameter
// If fromIndex is a negative number then the index is calculated backward. 

let alphabets3 = ["a", "b", "c", "a", "d"];

// starts the search at third last position
let lastIndex6 = alphabets3.lastIndexOf("a", -3);

console.log(lastIndex6); // 0
