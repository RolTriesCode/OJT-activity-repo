// Exercise 1

/*  
 * DOCU: Performs a calculation on two numbers using a callback operation.
 * @param {number} num1 - First number to be used in the calculation
 * @param {number} num2 - Second number to be used in the calculation
 * @param {function} operation - Callback function that defines the operation to perform
 * @returns {number | string} - The result of the callback operation or an error message from the callback
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

// Examples
console.log(calculate(5, 3, add));        
console.log(calculate(5, 3, subtract));   
console.log(calculate(4, 2, multiply));  
console.log(calculate(10, 2, divide));    





// Exercise 2

/*  
 * DOCU: Displays a message after a delay, with callbacks before and after the delay.
 * @param {string} message - The message to be displayed after the delay
 * @param {number} delay - Time in milliseconds before the message is shown
 * @param {function} beforeCallback - Callback executed immediately before starting the delay
 * @param {function} afterCallback - Callback executed after the delay with the message as an argument
 * @returns {void}
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function delayedMessage(message, delay, beforeCallback, afterCallback) {
    beforeCallback();

    setTimeout(() => {
        afterCallback(message);
    }, delay);
}

// Example
delayedMessage(
    "Hello, world!",
    2000,
    function () {
        console.log("Waiting for the message...");
    },
    function (msg) {
        console.log(msg);
    }
);





// Exercise 3
/*  
 * DOCU: Repeats a given task callback a specified number of times, with optional early termination.
 * @param {number} times - Number of times to execute the callback
 * @param {function} callback - Function executed on each iteration, receives the current index. Return false to stop early.
 * @returns {void}
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        const result = callback(i);

        if (result === false) {
            break;
        }
    }
}

// Example
repeatTask(5, function (index) {
    console.log("Iteration:", index);

    if (index === 2) {
        return false; // stop early
    }
});
