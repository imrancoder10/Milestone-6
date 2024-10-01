const numbers = [12, 23, 25, 26, 2];
const double = numbers.map(num => num * 2);
// console.log(double);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const half = numbers.map(num => num / 2);
// console.log(half);

// ==================================================================================
const friends = ['Amena', 'Jamena', 'Kamena', 'Janena'];
const lengths = friends.map(friend => friend.length);
// console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);