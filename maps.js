const numbers = [4, 5, 9, 8, 3]
const output = []

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result)
}

// console.log(output);

//1. loop
//2. called function with element
// push result on an array

// Shortcut 
// const output2 = numbers.map(number => number * 2);

const output2 = numbers.map(x => x * 2);
// console.log(output2);



const square = numbers.map(x => x * x)
console.log(square);