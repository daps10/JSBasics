// JavaScript Object.toLocaleString()

// The Object.toLocaleString() method returns a language-sensitive string representation 
// of the object.

// Example
const number = 123456.789;

// convert number to string with a language-sensitive
// representation for the Indian English locale
const numberString = number.toLocaleString('en-IN');

console.log(numberString); // Output: 1,23,456.789

/*
=========== toLocaleString() Parameters
- The toLocaleString() method does not take in any parameters by default. 
However, it can have optional parameters:
  - Locales - specifies which language format to use, such as en-US (American English), 
  en-IN (Indian English) and so on
  - options - object that helps set some properties to customize the string representation

- Note: The Locales and options arguments customize the behavior of the function to specify 
the desired formatting conventions based on the language or region.

=========== toLocaleString() Return Value
- The toLocaleString() method returns a string representing the object.

*/


// Example 1: JavaScript toLocaleString() With Array
const arr = [4, 7, 10];

// converts to string in French currency format (Euros)
let string = arr.toLocaleString("fr", { style: "currency", currency: "EUR" });
console.log(string); // Output: 4,00 €,7,00 €,10,00 €

/*
- In the above example, the toLocaleString() converts the array arr into a formatted string having 
currency format for the French Locale and using Euros as the currency symbol.

*/

// Example 2: toLocaleString() Method With Number
const num = 123456.789;

// convert num to string in
// Indian English formatting convention
console.log(num.toLocaleString("en-IN"));  // Output: 1,23,456.789

// Example 3: toLocaleString() Method With Date
// create a new date object
const date = new Date(Date.now());
console.log(date);  // Output: Fri Mar 03 2022 12:30:00 GMT-0800 (Pacific Standard Time)

// convert the date using German locale formatting convention 
let dateStr = date.toLocaleString("de");
console.log(dateStr);  // Output: 29.7.2020, 15:37:00

