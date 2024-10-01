/***
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. object.keys, object.values, object.entries
 * 7. for of used in array and string
 * 8.for in loop used in object
 */

const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: 'Imran',
    age: 25
}
// =============================================================

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`
// ==============================================================

if (true) {

}
// ==============================================================

const square = x => x * x;
const sum = () => a + b;

// ============================================================

const {age, z, ...others} = {
    x: 2,
    y: 5,
    z: 3,
    name: 'Imran',
    age: 55
}
// console.log(age);
// console.log(z);
// console.log(others);
// ==============================================================

const [first, second, ...otherFriends] = ['Amena', 'Kamena', 'Jamena', 'Janena'];
// console.log(first);
// console.log(second);
// console.log(otherFriends);
// ============================================================================
