const difference = (x, y) => x - y; // return here implicit 
const multiply = (first, second, third) => first + second + third;
const getAge = (person) => person.age;
const student = {
    name: 'Imran',
    age: 30
}
// const age = getAge(student);
// console.log(age);

// =================================================================
// single parameter
const getThird = numbers => numbers[2];
const third = getThird([5, 6, 9, 8, 7]);
// console.log(third);

const doubleIt = num => num * 2;
const mult = doubleIt(5);
// console.log(mult);
// ====================================================


// No parameter
const getPI = () => Math.PI;
console.log(getPI());

// ==========================================================

// large arrow function
const doMath = (x, y, Z) => {
    const sum = x + y + Z;
    const mult = x * y * Z;
    const result = sum + mult;
    return result;
}

// const sum = doMath(12, 20, 10);
// console.log(sum);