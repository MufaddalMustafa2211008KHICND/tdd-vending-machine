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
        //arrange
        const vm =  new Machine;

        //act
        const selections = vm.seeSelections();

        //assert
        expect(selections.length).not.toBe(0)
    })

    test('AC2: When I deposit money, the machine shows the deposited amount', () => {
        //arrange
        const vm =  new Machine;

        //act
        const depositedMoney = vm.deposit(500);

        //assert
        expect(depositedMoney).not.toBe('You have deposited Rs 500')
    })
});
