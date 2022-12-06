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
        const itemCode = 1375;

        const message = vm.selectItem(itemCode);

        //assert
        expect(message).toBe('The item you selected is unavailable')
    })
});
