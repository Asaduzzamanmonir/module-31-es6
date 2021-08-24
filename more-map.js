const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brudy', 'Tom Jerry'];

const fLengths = friends.map(friend => friend.length)
// console.log(fLengths);

const products = [
    { name: 'Water Bottle', color: 'Blue', price: 500 },
    { name: 'Mobile Phone', color: 'Red', price: 125000 },
    { name: 'Mobile Watch', color: 'Black', price: 15000 },
    { name: 'Money Bag', color: 'purple', price: 2800 },
    { name: 'Key Board', color: 'White', price: 550 }
]

const productsName = products.map(product => product.name)
const productsPrice = products.map(product => product.price)
products.map(product => console.log(product))
// console.log(productsPrice);