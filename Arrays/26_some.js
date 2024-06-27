// Javascript Array some()

// The some() method tests whether any of the array elements pass 
// the given test function.

// Example
// a test function: returns an even number
function isEven(element) {
  return element % 2 === 0;
}

// defining an array
let numbers = [1, 3, 2, 5, 4];

// checks whether the numbers array contain at least one even number
console.log(numbers.some(isEven)); // true 

/*
===== some() Return Value
- Returns true if an array element passes the given test function (callback 
returns a truthy value).
- Otherwise, it returns false.

*/

// Example 2: some() Method to Check Result of Students
let scoreObtained = [45, 50, 39, 78, 65, 20];
const studentIsPassed = (score) => {
  return score < 30;
}
if(scoreObtained.some(studentIsPassed) === true) {
  console.log("At least one of the students failed.");
} else {
  console.log("All students are passed.");
}

// At least one of the students failed

