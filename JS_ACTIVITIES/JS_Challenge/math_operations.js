// Task 1
let item1 = 6;
let item2 = 10;
let item3 = 2;

let totalCost = item1 + item2 + item3;

console.log(`The total cost of the items is ${totalCost}.`);


// Task 2
let num1 = 1;
let num2 = 2;
let num3 = 3;

let numAverage = (num1 + num2 + num3) / 3;

console.log(`The average is: ${numAverage}.`);


// Task 3
let num = 2;

let evenOrOdd = num % 2 === 0 ? "Even" : "Odd";

console.log(`${num} is an ${evenOrOdd} number.`);


// Task 4
let originalPrice = 100;
let discountPercent = 20;

let discountAmount = (originalPrice * discountPercent) / 100;
let discountedPrice = originalPrice - discountAmount;

console.log(`The discounted price is: $${discountedPrice}.`);

// Bonus - Task 4
let finalPrice = 80;
let discount = 20;

let originalPriceCalculated = finalPrice / (1 - discount / 100);

console.log(`The original price before the discount was: $${originalPriceCalculated}.`);
