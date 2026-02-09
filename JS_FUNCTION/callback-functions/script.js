/*  
 * TASK 1: Custom Array Filter
 * DOCU: Demonstrates the use of a callback function to filter elements from an array.
 *       The callback determines whether an element should be included in the result.
 * @inputs {Array<number>} numbers - List of numbers to be filtered
 * @process Uses a custom filter function with an isEven callback
 * @output {Array<number>} - Array containing only even numbers
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function customFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]


/*  
 * TASK 2: Countdown Timer
 * DOCU: Implements a countdown timer using setInterval and a callback function.
 *       The callback is executed every second until the countdown reaches zero.
 * @inputs {number} start - Starting number of the countdown
 * @process Decrements the value every second and triggers a callback
 * @output Displays countdown numbers in the console
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function countdown(start, callback) {
    let currentTime = start;

    let interval = setInterval(function () {
        callback(currentTime);

        if (currentTime === 0) {
            clearInterval(interval);
        }

        currentTime--;
    }, 1000);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);


/*  
 * TASK 3: Simple event listener
 * DOCU: Creates a button dynamically and attaches a click event using a callback.
 *       When clicked, the callback function is executed.
 * @inputs {string} buttonText - Text displayed on the button
 * @process Adds a click event listener to the button
 * @output Logs a message when the button is clicked
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function createButton(buttonText, callback) {
    const button = document.createElement("button");
    button.textContent = buttonText;

    button.addEventListener("click", callback);
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);


/*  
 * TASK 4: Task Runner
 * DOCU: Executes multiple task functions sequentially with a one-second delay between each.
 *       Uses recursion and setTimeout to control execution flow.
 * @inputs {Array<function>} tasks - List of task functions
 * @process Runs each task in order with a delay
 * @output Displays task completion messages in the console
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function runTasks(tasks) {
    let currentIndex = 0;

    function executeTask() {
        if (currentIndex < tasks.length) {
            tasks[currentIndex]();
            currentIndex++;

            setTimeout(executeTask, 1000);
        }
    }
    executeTask();
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);


/*  
 * TASK 5: Interactive Quiz Game 
 * DOCU: Displays a question prompt and checks the user's answer using a callback function.
 *       The callback determines whether the answer is correct or incorrect.
 * @inputs {string} question - Question to be displayed
 * @inputs {Array<string>} choices - Available answer options
 * @inputs {string} correctAnswer - Correct answer
 * @process Compares user input with the correct answer
 * @output Displays feedback in the console
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = window.prompt(question + "\n" + choices.join(", "));

    let isCorrect = userAnswer === correctAnswer;
    callback(isCorrect);
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
