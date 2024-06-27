// JavaScript Math random()

// The Math.random() function returns a floating-point, pseudo-random number 
// between 0 (inclusive) and 1 (exclusive).

let randomNumber = Math.random()
console.log(randomNumber) // Output: 0.16668531572829082

/*
======== Math.random() Parameters
- The Math.random() function does not take in any parameters.

======== Math.random() Return Value
- Returns a floating-point, pseudo-random number between 0 
(inclusive) and 1 (exclusive).

*/


// Example 2: Generate random number between two numbers

// generating random number in range [x, y)
function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

// random number in range 5(inclusive) and 10(exclusive)
var random_num = getRandomNum(5, 10);
console.log(random_num); // 9.949530067356847

// random number in range 0(inclusive) and 100(exclusive)
var random_num = getRandomNum(0, 100);
console.log(random_num); // 36.95096853809812


// Example 3: Generate random integer between two numbers
// Generating random integer in range [x, y)
// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// random int in range 5(inclusive) and 10(exclusive)
var random_num = getRandomInt(5, 10);
console.log(random_num); // 9

// random int in range 0(inclusive) and 100(exclusive)
var random_num = getRandomInt(0, 100);
console.log(random_num); // 50