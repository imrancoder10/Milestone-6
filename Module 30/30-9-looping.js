// for of use on array or string not in object 
// for in use on object not array or string

const numbers = [1, 2, 6, 9, 8];
// for(let i = 0; i < numbers.length; i++){}
// let i = 0; while(i < numbers.length) {}

for(const num of numbers){
    // console.log(num);
}
// =================================================================

const nobab = 'siraj ud doula';
for(const letter of nobab){
    // console.log(letter);
}

// ====================================================

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    const value = glass[key];
    // console.log(key, value);
}

// optional 
const keys = Object.keys(glass);
// console.log(keys);

for(const key of keys){
    console.log(key, glass[key]);
}
