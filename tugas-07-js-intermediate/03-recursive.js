// Soal 1 ////////////////////////////////////////////////////////////

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {

    // if (arr.length == 0) {
    //     return 0
    // } else {
    //     return arr[0] + sumOfArray(arr.slice(1));
    // }

    return (arr.length === 0) ? 0 : arr[0] + sumOfArray(arr.slice(1));
}

console.log("\n// Soal 1 /////////////////////////")
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


// Soal 2 ////////////////////////////////////////////////////////////

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
    let counter = 0;
    if (arr.length == 0) return counter;
    else {
        counter = countAboveAvg(arr.slice(1), avg);
        return (arr[0] > avg) ? counter += 1 : counter;
    }

}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log("\n// Soal 2 /////////////////////////")

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal 3 ////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
    let result = arr.length - 1;
    if (arr[result] == num) return `angka ditemukan pada index: ${result}`;
    else if (arr.length == 0) return "angka tidak ditemukan";
    else {
        let arrTemp = [...arr];
        arrTemp.pop();
        result = searchInArray(arrTemp, num);
        return result;
    }
}

console.log("\n// Soal 3 /////////////////////////")

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 8));

// Soal 4 ////////////////////////////////////////////////////////////

function trianglePattern(column, row) {
    let result = "";


    if (row <= 0) {
        return result;
    } else {
        for (let i = 1; i <= column; i++) {
            if (i < row) result += String.fromCharCode(32);
            else result += String.fromCharCode(64 + i);

            if (i == column && row != 0) result += "\n";
        }

        return result += trianglePattern(column, row - 1);
    }
}

const first = 5;
const second = 3;
const third = 2;

console.log("\n// Soal 4 /////////////////////////")

console.log(trianglePattern(first, first));
console.log(trianglePattern(second, second));
console.log(trianglePattern(third, third));