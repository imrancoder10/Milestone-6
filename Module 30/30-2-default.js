// default --> if value is not provided, take this as a default.

function add(num1 = 99, num2 = 0, num3) {
    const result = num1 + num2 + num3;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);
// const sum = add(5);
// const sum = add(20, 15, 10);
// const sum = add(5);
// console.log(sum);

// =============================================

function fullName(first, last){
    const full = first + ' ' + last;
    return full;
}

const result2 = fullName('Imran', 'hossain');
console.log(result2);

// =================================================================

function friends(numbers = []){ // default array is empty array

}

function person(human = {}){
    
}