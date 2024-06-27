// Javascript Array filter()

// The filter() method returns a new array with all elements that pass the 
// test defined by the given function.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

/*

=== filter() Return Value
- Returns a new array with only the elements that passed the test.

*/

// Example 1: Filtering out values from Array
const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

let newPrices= prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
console.log(newPrices); // [ 3000, 5000, 8000 ]


// Example 2: Searching in Array
const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];
const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);
let newLanguages = searchArr(languages, "p");
console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]