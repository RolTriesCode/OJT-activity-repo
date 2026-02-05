// Task 1
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// Task 2
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`The sum of the first ${n} numbers is: ${sum}`);


// Task 3
let myArray = [2, 4, 6, 8, 10];

for (let i = 0; i < myArray.length; i++) {
    console.log(`Array Element: ${myArray[i]}`);
}


// Task 4
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}


// Task 5
let array = [1, 3, 5, 7, 9];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${array[i]}`);
}
