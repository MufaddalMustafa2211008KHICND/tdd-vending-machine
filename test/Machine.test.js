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

    test('At first I should see selections in the vending machine', () => {
        //arrange
        const vm =  new Machine;

        //act
        const selections = vm.seeSelections();
        
        //assert
        expect(selections.length).not.toBe(0)
    })

});
