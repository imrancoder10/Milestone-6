// var: no reason to use var
// let: allow it to reassign 
// const: do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

// ================================================

let count = 0; //let allow but const not allow for reassign
count = count + 10;
console.log(count);

// ==================================================

const numbers = [25, 2, 36, 29];
// numbers = [5, 69, 7, 48, 90]; //reassign not allow
numbers[0] = 70; //allow
numbers.push(10, 20, 30, 40);
console.log(numbers);


// =============================================

// object

const student = {
    name: 'Imran',
    class: 12
}
// student = {name: 'Hossain'} // reassign not allow
student.name = 'Nirob';
console.log(student);

// =======================================================
let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = i;
    sum = sum + i;
}
console.log(sum);