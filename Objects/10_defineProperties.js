// Javascript Object.defineProperties()

// The Object.defineProperties() method adds or modifies properties on 
// an object and returns the object.

// Example
// create an object obj
let obj = {};

// define multiple properties of the obj object
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
});

console.log(obj.property1); // true 
console.log(obj.property2); // Hello

/*
============ defineProperties() Parameters
- The defineProperties() method takes in:
  - obj - the object on which to define or modify properties.
  - props - objects whose keys represent the names of the properties to be 
  defined or modified, and whose values are objects describing those properties.


============ defineProperties() Return Value
- The defineProperties() method returns the object that was passed as an argument 
i.e. obj.

*/