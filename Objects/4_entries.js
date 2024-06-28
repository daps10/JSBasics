// JavaScript Object.entries()

// The Object.entries() method returns an array of key-value pairs of an object's enumerable 
// properties.

// Example
const obj = { name: "Adam", age: 20, location: "Nepal" };

// returns properties in key-value format
console.log(Object.entries(obj)); 
// Output:  [ [ 'name', 'Adam' ], [ 'age', 20 ], [ 'location', 'Nepal' ] ]

/*
========== entries() Parameters
- The entries() method takes in:
  - obj - the object whose enumerable properties are to be returned.

========== entries() Return Value
- The entries() method returns an array of all the enumerable properties of an object, 
where each element will be a key-value pair.

*/


// Example 2: entries() With Randomly Arranged Keys
const obj1 = { 42: "a", 22: "b", 71: "c" };

// returns key-value pairs arranged
// in ascending order of keys
console.log(Object.entries(obj1));
// Output: [ [ '22', 'b' ], [ '42', 'a' ], [ '71', 'c' ] ] 

/*
- However, if we use the entries() method on obj, the output will include key-value 
pairs where the keys are sorted in ascending order.

*/

// Example 3: entries() to Iterate Through Key-Value Pairs
const obj2= { name: "John", age: 27, location: "Nepal" };

// iterate through key-value pairs of object
for (const [key, valuue] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
/*
// output:: 

name: John
age: 27
location: Nepal
*/

/*
- In each iteration of the loop, we can access the current object property in the form of 
key-value pairs.

*/

