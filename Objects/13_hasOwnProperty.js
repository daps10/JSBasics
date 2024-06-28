// JavaScript Object.hasOwnProperty()

// The Object.hasOwnProperty() method checks if the object possesses the 
// given property.

// Example
const obj = {};
obj.id = 42;

// check if id is present in obj or not
console.log(obj.hasOwnProperty("id")); // Output: true

/*
=========== hasOwnProperty() Parameters
- The hasOwnProperty() method takes in:
  - prop - the String name or Symbol of the property to test.

=========== hasOwnProperty() Return Value
- The getPrototypeOf() method returns a Boolean value:
  - true - if the object possesses the specified property
  - false - if the object doesn't possess the specified property

*/

// Example : Javascript Object.hasOwnProperty()
// create an object with property id
const obj1 = {id: 42};

// check if id exists in obj1 
console.log(obj1.hasOwnProperty("id"));  // Output: true

// check if name exists in obj1 
console.log(obj1.hasOwnProperty("name"));  // Output: false

// inherited properties return false
console.log(obj1.hasOwnProperty("toString"));  // Output: false