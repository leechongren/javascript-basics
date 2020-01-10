const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
// function sum(array) {
//     let sumOfArray = 0
//     for(let i = 0;i<array.length;i++){
//         sumOfArray += array[i]
//     }

//     return sumOfArray
// }

function sum(numbers){
    return numbers.reduce(function reducer(accumulator,currentValue){
        return accumulator + currentValue
    },0)
}





// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);
assertEquals(sum([]),0);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
    let evenArray = []
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2===0){
            evenArray.push(array[index])
        }
        
    }
    return evenArray
}

// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
function sumEvenNumbers(array) {
    let evenArray = []
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2===0){
            evenArray.push(array[index])
        }
        
    }

    let sumOfArray = 0
    for(let i = 0;i<evenArray.length;i++){
        sumOfArray += evenArray[i]
    }

    return sumOfArray

}

// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function sortedUnion(arr1, arr2) {
    for (let index = 0; index < arr2.length; index++) {
        arr1.push(arr2[index])
        
    }

    arr1.sort(function compare(a,b){return a-b})

    return arr1
}

// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
