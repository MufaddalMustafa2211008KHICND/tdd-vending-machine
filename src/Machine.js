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
                    return {item:item.item, change:[20,10]}
                }
            }
        }
        return 'The item you selected is unavailable'
    }
    
    cancel(){
        return {change:[this.money]}
    }

};