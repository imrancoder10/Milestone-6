//No - 1:  Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const multiply = (a, b, c) => a * b * c;
const mult = multiply(10, 12, 13);
// console.log(mult);

// =================================================================================================

// No - 2: Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

const para = `I am a web developer.
I love to code. 
I love to eat biryani.`;
// console.log(para);

// ================================================================================================
// No - 3: Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add = (a, b = 5) => a + b;
const result = add(15);
// console.log(result);

// ================================================================================================
// No - 4: Write an arraw function where it will do the following: i) It will take an array where the array elements will be the name of your friend. i) check if the length of each element is even, push elements with even length to a array and return the result.



const searchFriend = friends => {
    const evenLetterOfFriend = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenLetterOfFriend.push(friend)
        }
    }
    return evenLetterOfFriend;
}
const finalResult = searchFriend(['Imran', 'Shohagh', 'Rana', 'Kamal', 'Raju']);
// console.log(finalResult);

// console.log(evenLetterOfFriend);

// =================================================================================================

/*
No - 5: Write an arrow function where it will do the following:
 i) Square each array element. 
 ii) Calculate the sum of the squared elements. 
 iii) Return the average of the sum of the squared elements.
 */

const squareNumber = numbers => {
    let sum = 0;
    for(const number of numbers){
        sum = sum + Math.pow(number, 2);
    }
    return sum;
}
const numbers = [10, 20, 30];
const result2 = squareNumber(numbers);
// console.log(result2);
// ===========================================================

/**
 No - 6: Write an arrow function where it will do the following:
 i) It will take two array inputs
 ii) Combine the two arrays inputs
 iii) Find the maximum number from the new array and return the result
 */

 const maxNumber =(num1, num2)=> {
    // const combineArray = num1.concat(num2);
    const combineArray = [...num1, ...num2]; //or
    console.log(...combineArray);
    const max = Math.max(...combineArray);
    return max;

 }

 const numbers1 = [12, 14, 16];
 const numbers2 = [18, 20, 22];
 const max = maxNumber(numbers1, numbers2);
 console.log(max);