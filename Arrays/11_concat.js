// JavaScript Array concat()

// The concat() method returns a new array by merging two or more 
// values/arrays.

let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

/* Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8 
]
*/

/*
==== concat() Parameters
- The concat() method takes in an arbitrary number of arrays and/or values as arguments.

==== concat() Return Value
- Returns a newly created array after merging all arrays/values passed in the argument.

- The concat() method first creates a new array with the elements of the object 
on which the method is called. It then sequentially adds arguments or the elements 
of arguments (for arrays).

*/

// Example 2: Concatenating nested arrays
var randomList = [1, 2, 3];
var randomNestedList = [
  [4, 5],
  [6, 7],
];
var combined = randomList.concat(randomNestedList);
console.log(combined); // [ 1, 2, 3, [ 4, 5 ], [ 6, 7 ] ]

// changing the value 1 to 0
randomList[0] = 0;
console.log(randomList); // [ 0, 2, 3 ]

// changes not reflected in concatenated array
console.log(combined); // [ 1, 2, 3, [ 4, 5 ], [ 6, 7 ] ]

// modifying nested list (adding 6 to first element)
randomNestedList[0].push(6);
console.log(randomNestedList); // [ [ 4, 5, 6 ], [ 6, 7 ] ]

// changes are reflected in concatenated array
// since it is a reference to the object
console.log(combined); // [ 1, 2, 3, [ 4, 5, 6 ], [ 6, 7 ] ]


/*
- Here, the nested array's reference is copied to the concatenated array.
So, when we modify any of the references, the changes are reflected 
everywhere.

*/