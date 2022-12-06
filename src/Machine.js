module.exports = class Machine {

    constructor() {
        this.money = 0;
    }


    seeSelections() {
        return [
            {item:'crisps', price:'Rs 100', code: 1}, 
            {item: 'chocolate', price:'Rs 350', code: 2},
            {item: 'mints', price: 'Rs 70', code: 3}
        ]
    }

    deposit(money) {
        this.money += money;
        return `You have deposited Rs ${this.money}`
    }

    selectItem(code) {
        for(const item of this.seeSelections()){
            if(code === item.code){
                return 'Item is availalable'
            }
        }
        return 'The item you selected is unavailable'
    }

};