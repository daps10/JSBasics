// JavaScript Object.assign()

// The Object.assign() method copies all the enumerable properties of the given 
// objects to a single object and returns it.


// Example
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

// combine all the properties of
// obj1, obj2, obj3 into a single object 
const mergedObj = Object.assign(obj1, obj2, obj3);

console.log(mergedObj);  // Output: { a: 1, b: 2, c: 3 }

/*
============ assign() Parameters
- The assign() method takes in:
  - target - the target object to which we will copy all the properties of the sources.
  - sources - the source object(s) whose properties we want to copy.

============ assign() Return Value
- The assign() method returns the target object.

*/

// Example 1: Javascript Object.assign() to Clone Objects
// create source object
const obj = {
  name: "Alan Turing",
  age: 20,
};

// create target object
let newObject = {};

// copy enumerable properties of obj to newObject
// newObject is returned and stored in copy object
const copy = Object.assign(newObject, obj);

// print the copy object
console.log(copy); // Output: { name: 'Alan Turing', age: 20 }
// print newObject
console.log(newObject); // Output: { name: 'Alan Turing', age: 20 }

/*
- Since assign() modifies the target object and returns the same object, both copy and newObject 
are clones of one another. As a result, we get identical outputs when we print them both.

*/

// Example 2: assign() to Merge Objects
// source objects
const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 12, c: 13 };
const o3 = { c: 23 };

// merge o1, o2, and o3
// earlier source keys are overwritten by later sources
const o4 = Object.assign({}, o1, o2, o3);

console.log(o4);  // Output: { a: 1, b: 12, c: 23 }