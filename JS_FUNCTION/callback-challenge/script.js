/*  
 * Task 1: Custom Map Function
 * DOCU: Creates a new array by applying a callback function to each element of the input array.
 * @inputs {Array} array - The array to map over
 * @inputs {function} callback - Function applied to each element, receives element, index, and array
 * @output {Array} - A new array containing the transformed elements
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function customMap(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) { return num * 2; });
console.log(doubled); // [2, 4, 6]


/*  
 * Task 2: Filter Function
 * DOCU: Filters elements of an array based on a callback function condition.
 * @inputs {Array} array - The array to filter
 * @inputs {function} callback - Function that returns true to keep the element
 * @output {Array} - A new array containing elements that pass the condition
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function filter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Example Provided:
let filtered = filter([1, 2, 3, 4, 15], function (val) { return val < 10; });
console.log(filtered); // [1, 2, 3, 4]


/*  
 * Task 3: Some Function
 * DOCU: Checks if at least one element in the array satisfies the callback condition.
 * @inputs {Array} array - The array to check
 * @inputs {function} callback - Function that returns true for elements that satisfy the condition
 * @output {boolean} - True if at least one element passes the callback, otherwise false
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function some(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

// Example Provided:
let someResult = some([1, 2, 3, 4], function (val) { return val > 5; });
console.log(someResult); // false


/*  
 * Task 4: Every Function
 * DOCU: Checks if all elements in the array satisfy the callback condition.
 * @inputs {Array} array - The array to check
 * @inputs {function} callback - Function that returns true if element satisfies the condition
 * @output {boolean} - True if all elements pass the callback, otherwise false
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function every(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// Example Provided:
let everyResult = every([1, 2, 3], function (val) { return val > 0; });
console.log(everyResult); // true


/*  
 * Task 5: Reduce Function
 * DOCU: Reduces an array to a single value by applying a callback function sequentially to its elements.
 * @inputs {Array} array - The array to reduce
 * @inputs {function} callback - Function that combines the accumulator and current element
 * @inputs {any} initialVal - Initial value for the accumulator
 * @output {any} - The final accumulated result
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function reduce(array, callback, initialVal) {
    let accumulator = initialVal !== undefined ? initialVal : array[0];
    let startIndex = initialVal !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// Example Provided:
let sum = reduce([1, 2, 3], function (acc, num) { return acc + num; }, 0);
console.log(sum); // 6


/*  
 * Task 6: Includes Check
 * DOCU: Checks if any element in the array satisfies the callback condition.
 * @inputs {Array} array - The array to search
 * @inputs {function} callback - Function returning true for a matching element
 * @output {boolean} - True if a matching element exists, otherwise false
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
function customIncludes(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

// Example Provided:
let includesResult = customIncludes([1, 2, 3], function (val) { return val === 2; });
console.log(includesResult); // true
