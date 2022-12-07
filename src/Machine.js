const denominations = [500, 100, 50, 20, 10]


const getChange = (amount, denoms) => {
    const change = []
    for(const item of denoms) {
        while(amount >= item) {
            amount -= item
            change.push(item)
        }
    }
    return {change, amountLeft: amount}
}

module.exports = class Machine {

    constructor() {
        this.money = 0;
    }


    seeSelections() {
        return [
            {item:'crisps', price: 100, code: 1}, 
            {item: 'chocolate', price: 350, code: 2},
            {item: 'mints', price: 70, code: 3},
            {item: 'fanta candy', price: 5, code: 4}
        ]
    }

    deposit(money) {
        this.money += money;
        return `You have deposited Rs ${this.money}`
    }

    selectItem(code) {
        for(const item of this.seeSelections()){
            if(code === item.code){
                if(this.money < item.price){
                    return `Your deposit is insufficient. Please add Rs ${item.price-this.money} for this item`
                }
                else{
                    const {change, amountLeft} = getChange(this.money-item.price, denominations)
                    this.money = amountLeft

                    if(amountLeft !== 0){
                        return 'Cannot return proper change. Please choose another item or cancel the transaction'
                    }
                    
                    return {item: item.item, change}
                }
            }
        }
        return 'The item you selected is unavailable'
    }
    
    cancel(){
        const {change, amountLeft} = getChange(this.money, denominations)
        this.money = amountLeft
        return {change}
    }

};