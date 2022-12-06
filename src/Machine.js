module.exports = class Machine {
    constructor() {

    }


    seeSelections() {
        return [
            {item:'crisps', price:'Rs 100'}, 
            {item: 'chocolate', price:'Rs 350'},
            {item: 'mints', price: 'Rs 70'}
        ]
    }

    deposit(money) {
        return `You have deposited Rs ${money}`
    }

};