const numbers = [5, 16, 25, 85, 11, 68, 15, 49, 17, 36, 9, 20, 2, 1,];

const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 20);
// console.log(smallNumber);


const products = [
    { name: 'Water Bottle', color: 'Blue', price: 500 },
    { name: 'Mobile Phone', color: 'Red', price: 125000 },
    { name: 'Mobile Watch', color: 'Black', price: 15000 },
    { name: 'Money Bag', color: 'purple', price: 2800 },
    { name: 'Key Board', color: 'White', price: 550 }
]

const expensive = products.filter(product => product.price > 1000);
const blacks = products.filter(product => product.color == 'Black')
const blues = products.filter(product => product.color == 'Blue')
// console.log(blues);



const whiteItem = products.find(product => product.color == 'White')
console.log(whiteItem);