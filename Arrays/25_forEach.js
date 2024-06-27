// Javascript Array forEach()

// The forEach() method executes a provided function for each array element.

// Example
let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

/* Output:
1
9 
16
81
64
*/

// Example 2: Using thisArg
function Counter() {
  this.count = 0;
  this.sum = 0;
  this.product = 1;
}

Counter.prototype.execute = function (array) {
  array.forEach((entry) => {
      this.sum += entry;
      ++this.count;
      this.product *= entry;
  }, this)
}

const obj = new Counter();
obj.execute([4, 1, , 45, 8]);

console.log(obj.count); // 4

console.log(obj.sum); // 58

console.log(obj.product); // 1440