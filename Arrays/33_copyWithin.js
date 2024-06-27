// Javascript Array copyWithin()

// The copyWithin() method copies array elements from one position to 
// another in the given array.

// Example
let words = ["apple", "ball", "cat", "dog"];

// copies element from index 0 to index 3 
words.copyWithin(3, 0);

// modifies the original array 
console.log(words);

// Output: 
// [ ''apple'', ''ball'', ''cat'', ''apple'' ]


/*
====== copyWithin() Parameters
- The copyWithin() method can take three parameters:
  - target - The index position to copy the elements to.
  - start (optional) - The index position to start copying elements from. 
  If omitted, it will copy from index 0.
  - end (optional) - The index position to stop copying elements from 
  (end element not included). If omitted, it will copy until the last index.

====== copyWithin() Return Value
- Returns the modified array after copying the elements.
- overwrites the original array.

*/

// Example 1: Using copyWithin() Method

let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(1, 4);
console.log(numbers); // [ 5, 2, 3, 4, 5 ]

let letters = ["a", "b", "c", "d"];
letters.copyWithin(2, 1);
console.log(letters); // [ 'a', 'b', 'b', 'c' ]


// Example 2: copyWithin() with Three Parameters
let laptops = ["dell", "hp", "acer", "asus"];
laptops.copyWithin(0, 2, 4);
console.log(laptops); // [ 'acer', 'asus', 'acer', 'asus' ]

/*
- laptops.copyWithin(0, 2, 4) copies elements from index 2 to 4 (not including 
index 4) to index 0 and modifies the laptops array to [ 'acer', 'asus', 'acer', 
'asus' ].


*/