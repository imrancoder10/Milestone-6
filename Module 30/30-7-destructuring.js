

const actor ={
    name: 'Imran',
    age: 30,
    phone: '01700000000',
    money: 12562
}
// const phone = actor.phone;
// const age = actor.age;
// console.log(phone);
// console.log(age);

// if right side is an object left side of destructuring will be object as well
//use property name as a variable that contains the property value 

const {name: nikName, age, phone, money} = actor;
// console.log(name, age, phone, money);
// console.log(nikName);

// ===================================================================================

const numbers = [45, 95, 85, 75, 80];
// const [a, b, c, d, e] = numbers;
const [a, , , , e] = numbers;
console.log(a, e);
// console.log(a);


// ==================================================================================
// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}
const [first, seccond] = doubleThem(5, 10);
// console.log(first, seccond);