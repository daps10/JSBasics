// JavaScript Array reverse()

// The reverse() method returns the array in reverse order.

// example

let numbers= [1,2,3,4,5];
// reversing the numbers array
let reversedArray = numbers.reverse();

console.log(reversedArray); // Output: [ 5, 4, 3, 2, 1 ]

// reverse() Parameters
// The reverse() method does not take any parameters.

// reverse() Return Value
// Returns the array after reversing the order of its elements.


// Example 1
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// reversing the order of languages array
let reversedLanguageArray = languages.reverse();

console.log("Reversed Language Array: ", reversedLanguageArray); // Reversed Language Array:  [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]

// modifies the original array
console.log("Original Array: ", languages); // Original Array:  [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]

// languages.reverse() reverses the order of each element in the array and returns the reversed array.
// Since the method modifies the original array, both languages and reversedArray hold the same value.



// Example 2: reverse() Method with Spread Operator

// using spread operator to reverse the array
let reversedUsingSpread = [...languages].reverse();

console.log("Reversed Array:", reversedUsingSpread); // Reversed Array: [ 'JavaScript', 'Python', 'C++', 'Java', 'Lua' ]

// modifies the original array
console.log("Original Array:", languages); // Original Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]


