// JavaScript String repeat()

// The repeat() method creates a new string by repeating the given string a specified 
// number of times and returns it.

// Exmaple
const holiday = "Happy holiday!";
// repeating the given string 3 times
const result = holiday.repeat(3);
console.log(result); // Happy holiday!Happy holiday!Happy holiday!


/*
========= repeat() Parameters
- count - An integer between 0 and +Infinity, indicating the number of times to repeat the string.

========= repeat() Return Value
- Returns a new string containing the specified number of copies of the given string.

*/

// Example 2: Using Non-integer as a Count Value in repeat()
let sentence = "Happy Birthday to you!";

// using non-integer count value
let result1 = sentence.repeat(3.2);
console.log(result1); // Happy Birthday to you!Happy Birthday to you!Happy Birthday to you!
 
// using non-integer count value
let result2 = sentence.repeat(3.7);
console.log(result2);  // Happy Birthday to you!Happy Birthday to you!Happy Birthday to you!

/*
- Here, the non-integer index values 3.2 and 3.7 are converted to the nearest 
integer index 3. So, both sentence.repeat(3.2) and sentence.repeat(3.7) repeats 
the string 3 times.


*/


// Example 3: Using Negative Number as a Count Value

// The count value in the repeat() method must be a non-negative number. Otherwise,
//  it throws an error. For example:
let sentence1 = "Happy Birthday to you!";
// using negative number as count value
// let result3 = sentence1.repeat(-1);

console.log(result3); // RangeError: Invalid count value
