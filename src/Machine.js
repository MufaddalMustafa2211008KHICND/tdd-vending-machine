module.exports = class Machine {

    constructor() {
        this.money = 0;
    }


    seeSelections() {
        return [
            {item:'crisps', price:'Rs 100'}, 
            {item: 'chocolate', price:'Rs 350'},
            {item: 'mints', price: 'Rs 70'}
        ]
    }

    deposit(money) {
        this.money += money;
        return `You have deposited Rs ${this.money}`
    }

};