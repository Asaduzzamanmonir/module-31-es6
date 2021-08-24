// declare variable based on the name of the object property

const myObject = { a: 100, b: 50, x: 600, y: 300, z: 330 };

const { a, b, x, y, z } = myObject;
console.log(y);

const { sky, soil, balance, water } = { sky: 'Blue', soil: 'Mati', balance: 60026, water: 'Pani Pani' }
console.log(balance, sky, water, soil);

//declare variable based on the name of the Array property
const [p, q, r, s, t, u, v, k] = [300, 990, 555, 566, 666, 777, 111, 321]
console.log(q, s, k, t);


const [best, friend] = ['momtaz', 'Porshi'];
console.log(friend);



// Chaining
const company = {
    name: 'GrameenPhone',
    ceo:
    {
        id: 1,
        name: 'Ajmol Khan orf Jhankar Vai',
        food: 'elish'
    },

    department:
    {
        work: 'Web Dev',
        employee: 50,
        framework: 'mySQL'
    },

    tech:
    {
        first: 'HTML',
        second: 'JS',
        third: 'React'
    }
}

