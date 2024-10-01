// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.


const numbers = [1, 5, 2, 7, 9, 8];
// const selected = numbers.filter(num => num > 5);
// const selected = numbers.filter(num => num > 2)
// const selected = numbers.filter(num => num > 10)
// const selected = numbers.filter(num => num % 2 === 1);
const selected = numbers.filter(num => num % 2 === 0);
// console.log(selected);

// ==================================================================

const friends = ['Amena', 'Jamena', 'Kamena', 'Janena'];
// const selectedFriend = friends.filter(fri => fri.length % 2 ===1);
const selectedFriend = friends.filter(fri => fri.length > 5)
// console.log(selectedFriend);