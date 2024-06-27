// JavaScript Array flat()

// The flat() method creates a new array by flattening a nested array 
// up to the specified depth.

// Example
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flattenArray = numbers.flat(2);
console.log(flattenArray); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

/*
====== flat() Parameters
- depth - Integer specifying how deep a nested array should be flattened. 
Its default value is 1.


====== flat() Return Value
- Returns a flatted array with the sub-array elements concatenated into it.

*/


// Example 2: flat() Without Default Depth Argument
let array1 = [1,[7,8], [2, 3, 4], 5];
let flattenArray1 = array1.flat();
console.log(flattenArray1); // [1,7,8,2,3,4,5]


// Example 3: flat() to Remove Holes in Array
let array_with_holes = [1, , 3];
let flattedArray = array_with_holes.flat();
console.log(flattedArray); // [1,3]