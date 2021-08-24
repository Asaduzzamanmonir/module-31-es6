// 1. Variable Let const
const hubby = 'tahira Yeasha';
let phone = 'Samsung galaxy s21'
phone = 'Iphone 12 pro max'

//2. Defalt ParaMeter
function maxNumber(array = []) {
    let max = Math.max(...array)
    return max;
}
const biggest = maxNumber()
console.log(biggest);

// 3. tamplate declare
const myNote = `i am a mojnu of ${hubby} and i have a nice ${phone}`
console.log(myNote);

// Arrow Function 
/* function square(x) {
    return x * x
} */

const square = x => x * x

console.log(square(9));