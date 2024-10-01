// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
const numbers = [4, 5, 9, 78, 5];

const doubled = [];
for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}
// console.log(doubled);

// ============================map()================================================
const numbers2 = [2, 5, 9, 7, 8, 5];

// const doubleIt = num => num * 2;
function doubleIt(num) {
    return num * 2;
}
// const result = numbers2.map(doubleIt);
// console.log(result);
const double3 = n => n * 2;
const output = numbers2.map(double3);
// console.log(output);

// =======================================================================
const numbers3 = [2, 5, 9, 7, 8, 2];
const result2 = numbers3.map(n => n * 2);
console.log(result2);