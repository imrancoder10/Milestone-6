// ?convert to string for localStorage 
const person = {name: 'lal mia', age: 13, profession: 'painter'};
//console.log(person.toString()); // Not working this Method toString
const personString = JSON.stringify(person);
// console.log(personString);


// ?String Convert to object 

const person2 = {name: 'lal mia', age: 13, profession: 'painter'};
const convertedToString = JSON.stringify(person2);
// console.log(person2String);

const convertedToObject = JSON.parse(convertedToString);
// console.log(convertedToObject);
// console.log(convertedToObject.name);
// console.log(convertedToObject.age);
// console.log(convertedToObject.profession);

// ?=========================================================

const setAge = () =>{
    localStorage.setItem('age', 30);
    window.localStorage.setItem('age', 30);
}