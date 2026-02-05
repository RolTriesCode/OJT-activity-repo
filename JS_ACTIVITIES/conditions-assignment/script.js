// Task 1
let score = 99;

if (score >= 90 && score <= 100) {
    console.log("Grade A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// Task 2
let temperature = 20;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}


// Task 3
let age = 16;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}


// Task 4
{
    let age = 21;
    let isMember = true;

    if (age < 12) {
        console.log("The ticket is free.");
    } else if (age >= 12 && isMember) {
        console.log("The ticket costs $10.");
    } else {
        console.log("The ticket costs $15.");
    }
}


// Task 5 - Challenge Task
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Task 5 - Tests
let testYear = 2026;
console.log(`Is ${testYear} a leap year? ` + isLeapYear(testYear));

testYear = 2024;
console.log(`Is ${testYear} a leap year? ` + isLeapYear(testYear));

