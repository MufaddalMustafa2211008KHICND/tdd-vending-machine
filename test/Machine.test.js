const { TestScheduler } = require('jest');
const Machine = require('../src/Machine');



describe('the vending machine', () => {
    // it('should have items to purchase', () => {
    //     // setup
    //     const machine = new Machine();
    //     const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

    //     // exercise
    //     const actual = machine.seeSelections();

    //     // assert
    //     expect(true).toEqual(true);
    // });

    test('AC1: At first I should see selections in the vending machine', () => {
        //arange
        const vm = new Machine();

        //act
        const selections = vm.seeSelections();

        //assert
        expect(selections.length).not.toBe(0)
    })

    test('AC2: When I deposit money, the machine shows the deposited amount', () => {
        //arange
        const vm = new Machine();

        //act
        const depositedMoney = vm.deposit(500);

        //assert
        expect(depositedMoney).toBe('You have deposited Rs 500')
    })

    test('AC3: When I deposit additiopnal money, the machine shows new total amount', () => {
        //arange
        const vm = new Machine();

        //act
        vm.deposit(100)
        const depositedMoney = vm.deposit(50);

        //assert
        expect(depositedMoney).toBe('You have deposited Rs 150')
    })

    test('AC4: When the item is unavailable, machine prompts that the item is unavailable', () => {
        //arange
        const vm = new Machine();

        //act
        const itemCode = 13273;

        const message = vm.selectItem(itemCode);

        //assert
        expect(message).toBe('The item you selected is unavailable')
    })

    test('AC5: When I have deposited insufficient money, I get a message to add more money', () => {
        //arange
        const vm = new Machine();
        vm.deposit(50)

        // we are looking for mints(it cost 70 Rs)
        // And we have already deposited 50 Rs

        //act
        // mint's code is 3
        const message = vm.selectItem(3)

        //assert
        expect(message).toBe('Your deposit is insufficient. Please add Rs 20 for this item')
    })

    test('AC6: I want to receive change, If I deposited more than the price of selected item', () => {
        //arange
        const vm = new Machine();
        vm.deposit(100)

        // we are looking for mints(it cost 70 Rs) and we deposited 100 
        // And we want 30 rupees as change

        //act
        // mint's code is 3
        const item = vm.selectItem(3)

        //assert
        expect(item.change).toStrictEqual([20,10])
    })

    test('AC7: When I push cancel button I should receive money back which I deposited', () => {
        //arange
        const vm = new Machine();
        vm.deposit(100)

       
        //act
        const returnedmoney = vm.cancel()

        //assert
        expect(returnedmoney.change).toStrictEqual([100])
    })

    test('AC8: When machine cannot return correct change it should prompt me a message', () => {
        //arange
        const vm = new Machine();
        vm.deposit(100)

        //act
        //  we will be buying fanta candy(code 4) which has a price of 5 rs
        //  vending machine cannot return 95 rs
        const message = vm.selectItem(4)

        //assert
        expect(message).toStrictEqual('Cannot return proper change. Please choose another item or cancel the transaction')
    })
});
