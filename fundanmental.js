/**
 * @see {@link https://javascript.info/array}
 */
export function array() {
    // Array is a collection of elements
    // Array is a special object with numeric keys
    // Array is a reference type    
    // Array is a dynamic data structure
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Array is an object so we actually can add new properties to it
    arr.name = 'Array';

    arr.object = {
        "name": "Array"
    }

    console.group("::: Add new property to array");
    console.log(arr);
    console.groupEnd();

    console.group("::: Loop over array :::");
    // for loop
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // for...of
    for (let item of arr) { // iterate over array elements, don't need to use the number of current element
        console.log(item);
    }

    // for...in
    // iterate over all properties of array, including numeric keys and non-numeric keys
    // this loop is optimized for the generic object -> make it slower than for loop
    // -> we shouldn't use 
    for (let index in arr) {
        console.log(arr[index]);
    }
    console.groupEnd();

    console.group("::: Multidimensional Array :::");
    const metrics = [
        [1, 2, 3],
        [3, 10, 20],
        [100, 200, 300]
    ];

    console.log(metrics[1][2]) // 20
    console.groupEnd();

    // Task
    console.log("::: TASK :::");

    let fruits = ["Apples", "Pear", "Orange"];

    // push a new value into the "copy"
    let shoppingCart = fruits;
    shoppingCart.push("Banana");

    // what's in fruits?
    console.log(fruits.length); // 4
    console.log(fruits); // 4

    console.groupEnd();

    console.group("::: Task 2:::");
    task2();
    console.groupEnd();

    console.group("::: Task 3:::");
    task3();
    console.groupEnd();
}

/**
 * @see {@link https://javascript.info/task/create-array}
 */
function task2() {
    const styles = ["Jazz", "Blues"];
    console.log(styles);

    styles.push("Rock-n-Roll");
    console.log(styles);

    const middleIndex = Math.floor(styles.length / 2);
    styles[middleIndex] = "Classics";
    console.log(styles)

    styles.shift();
    console.log(styles);

    styles.unshift("Rap", "Reggae");
    console.log(styles);
}

/**
 * @see {@link https://javascript.info/array#calling-in-an-array-context}
*/
function task3() {
    let arr = ["a", "b"];

    arr.push(function () {
        console.log(this);
    });

    // The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.
    // So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array
    // a,b, function(){....}
    console.log(arr[2]());
}

/**
 * @see {@link https://javascript.info/task/array-input-sum}
 */
function task4() {
    const arr = [];
    let sum = 0;
    while (true) {
        const userInput = prompt("Enter a number", 0);
        if (userInput === "" || userInput === null || !isFinite(userInput)) break;
        arr.push(+userInput); // convert string to number
    }

    for (let number of arr) {
        sum += number;
    }

    return sum;

}

/**
 * @see {@link https://javascript.info/task/maximal-subarray}
 */
function task5GetMaxSubSum() {

}
array();