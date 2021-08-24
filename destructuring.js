const fish = {
    id: 58,
    fishName: 'Great Hilsha',
    price: 1000,
    phone: '01710174741',
    address: 'Chaadpur',
    dress: 'Silver'
}
// console.log(fish.dress);

// const phone = fish.phone;
// const name = fish.name
// const price = fish.price;
// const address = fish.address;

//shortcut
const { phone, fishName, address, id, price } = fish;
// console.log(name, price);


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

// const work = company.department.work;
// const ceoName = company.ceo.name;
// console.log(ceoName);

//shortcut
const { name, food } = company.ceo;
const { work, framework } = company.department;
const { second, third } = company.tech

console.log(third);
