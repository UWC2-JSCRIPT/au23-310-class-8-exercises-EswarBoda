describe("Tests for the Blackjack dealerShouldDraw function", () => {

    describe("Test for 10, 9 hand passed to dealerShouldDraw function", () => {
        it("dealerShouldDraw function should return false for cards 10, 9", () => {
            const hand = [
                {suite: 'hearts', displayVal: '10', val: 10},
                {suite: 'hearts', displayVal: '9', val: 9}
            ]

            const result = dealerShouldDraw(hand);
            
            expect(result).toEqual(false);
        });
    });

    describe("Test for Ace, 6 hand passed to dealerShouldDraw function", () => {
        it("dealerShouldDraw function should return true for cards Ace, 6", () => {
            const hand = [
                {suite: 'hearts', displayVal: 'Ace', val: 11},
                {suite: 'hearts', displayVal: '6', val: 6}
            ]

            const result = dealerShouldDraw(hand);
            
            expect(result).toEqual(true);
        });
    });

    describe("Test for Ace, 10, 6 hand passed to dealerShouldDraw function", () => {
        it("dealerShouldDraw function should return false for cards Ace, 10, 6", () => {
            const hand = [
                {suite: 'hearts', displayVal: 'Ace', val: 1},
                {suite: 'hearts', displayVal: '10', val: 10},
                {suite: 'hearts', displayVal: '6', val: 6}
            ]

            const result = dealerShouldDraw(hand);
            
            expect(result).toEqual(false);
        });
    });

    describe("Test for 2, 4, 2, 5 hand passed to dealerShouldDraw function", () => {
        it("dealerShouldDraw function should return true for cards 2, 4, 2, 5", () => {
            const hand = [
                {suite: 'hearts', displayVal: '2', val: 2},
                {suite: 'hearts', displayVal: '4', val: 4},
                {suite: 'hearts', displayVal: '2', val: 2},
                {suite: 'hearts', displayVal: '5', val: 5}
            ]

            const result = dealerShouldDraw(hand);
            
            expect(result).toEqual(true);
        });
    });
});