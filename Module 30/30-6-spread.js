const max = Math.max(6, 12, 25, 2, 87, 100);
// console.log(max);

// ===========================================
const numbers = [3, 5, 69, 45, 41, 23, 22];
const array = Math.max(...numbers);
// console.log(...numbers);
// console.log(array);

// ======================================================
// use spread operator to capy
const nums = [8, 5, 9, 6];
// const nums2 = nums;
// nums2.push(12);
// console.log(nums);
// console.log(nums2);
const nums3 = [...nums];
nums.push(10);
nums3.push(100);
console.log(nums);
console.log(nums3);
// ===================================================

// advanced

const sonkha = [...nums, 999] //add extra while copy
console.log(sonkha);

