/*
    Maaf saya merubah nama variabel, karena kalo tidak dirubah
    akan bentrok dan jadi error.
*/

// Soal 1 //////////////////////////////////////////////////////
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(array) {
    return [...array].reverse();
}

console.log("// Soal 1 /////////////////////////");

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


// Soal 2 //////////////////////////////////////////////////////
const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3];

function getAverage(array) {
    let average = array.reduce((total, arr) => total + arr) / array.length;
    let result = [];
    array.forEach(number => {
        if (number > average) result.push(number)
    });
    return result.length;
}

console.log("\n// Soal 2 /////////////////////////")

console.log(getAverage(arr3))
console.log(getAverage(arr4))


// Soal 3 //////////////////////////////////////////////////////
const arr5 = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(array, number) {
    let joinedArray = [];
    array.forEach(arr => joinedArray.push(...arr));

    let result;
    for (let i = 0; i < joinedArray.length; i++) {
        if (joinedArray[i] == number) {
            result = joinedArray.indexOf(number);
            break;
        }
    }

    return (result ? result : null);
}

console.log("\n// Soal 3 /////////////////////////")

console.log(searchInArray(arr5, 3));
console.log(searchInArray(arr5, 2));
console.log(searchInArray(arr5, 4));
console.log(searchInArray(arr5, 8));