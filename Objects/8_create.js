// Javascript Object.create()

// The Object.create() method creates a new object using the prototype of the 
// given object.

// Example
let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
  display() {
    console.log("Name:", this.name);
  }
};

// create object from Student prototype
let std1 = Object.create(Student);

std1.name = "Sheeran";
std1.display(); // Output: Name: Sheeran


/*
============ create() Parameters
- The create() method takes in:
  - proto - The object which should be the prototype of the newly-created object.
  - propertiesObject (optional) - An object whose enumerable own properties specify 
  property descriptors to be added to the newly-created object. These properties 
  correspond to the second argument of Object.defineProperties().

============ create() Return Value
- Returns a new object with the specified prototype object and properties.


*/

// Example: Using Object.create()
let Animal = {
  isHuman: false,
  sound: "Unspecified",
  makeSound() {
    console.log(this.sound);
  },
};

// create object from Animal prototype
let snake = Object.create(Animal);
snake.makeSound(); // Unspecified

// properties can be created  and overridden
snake.sound = "Hiss";
snake.makeSound(); // Hiss

// can also directly initialize object properties with second argument
let properties = {
  isHuman: {
    value: true,
  },
  name: {
    value: "Jack",
    enumerable: true,
    writable: true,
  },
  introduce: {
    value: function () {
      console.log(`Hey! I am ${this.name}.`);
    },
  },
};

human = Object.create(Animal, properties);
human.introduce(); // Hey! I am Jack.