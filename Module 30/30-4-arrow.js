// function declaration..................

// function add(a, b) {
//     const result = a + b;
//     return result;
// }


function add(a, b) {
    return a + b;
}
// const sum = add(50, 50);
// console.log(sum);

// =================================================
// function expression
const add2 = function (a, b) {
    return a + b;
}
// const sum = add2(50, 50);
// console.log(sum);

// ==================================================

// arrow function 
const add3 = (a, b) => a + b;
// const sum = add4(50, 50);
// console.log(sum);
// ==============================================================

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

// const sum = add4(50, 50, 10, 20);
// console.log(sum);

// =========================================================================

const multiply = (num1, num2) => num1 * num2;

const mult = multiply(10, 20);
console.log(mult);