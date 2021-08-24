class Supporter {
    name;
    address;
    designation = 'Support Web Dev'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    //function
    supportSession() {
        console.log(this.name, 'Creat a Support Session');
    }

}

const amirKhan = new Supporter('Amir Khan', 'Dubai')
const srk = new Supporter('Shah Rukh Khan', 'USA')
const salman = new Supporter('Salman Khan', 'UK')
const akshay = new Supporter('Akshay Kumar', 'Canada')
const neha = new Supporter('Neha Kakkar', 'Australia')

srk.supportSession()
console.log(neha);