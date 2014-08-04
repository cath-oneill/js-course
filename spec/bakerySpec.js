describe("Logic......................", function() {

	describe("buy function", function () {
		it("records the purchase of ingredients", function() {
			logic.buy("flour", 6, 10);
			logic.buy("eggs", 12, 12);
			expect(bakery.supplies.flour).toEqual(14);
			expect(bakery.supplies.eggs).toEqual(24);
		});

	    it("subtracts the amount of money spent on purchasing ingredients", function() {
	      	logic.buy("flour", 100, 10);
			logic.buy("eggs", 85, 12);
			expect(bakery.money).toEqual(815);

	    });
	
	    it("returns false if there are insufficient funds to make a purchase, otherwise true", function() {
	      	var sufficientFunds = logic.buy("flour", 900, 10);
			var insufficientFunds = logic.buy("eggs", 200, 12);
			expect(sufficientFunds).toEqual(true);
			expect(insufficientFunds).toEqual(false);
	    });
	});

	describe("make function", function() {
		it("returns false if there are insufficient supplies to make an item", function() {
			logic.make("cupcake");
			var sufficientSupplies = logic.make("cupcake");
			var insufficientSupplies = logic.make("cupcake");
			expect(sufficientSupplies).toEqual(true);
			expect(insufficientSupplies).toEqual(false);
		});

		it("does not allow supplies to fall below 0", function() {
			logic.make("cupcake");
			expect(bakery.supplies.flour).toEqual(2);
			var sufficientSupplies = logic.make("cupcake");
			expect(bakery.supplies.flour).toEqual(0);
			var insufficientSupplies = logic.make("cupcake");
			expect(bakery.supplies.flour).toEqual(0);
		});

    	it("should subtract the correct amount from each supply when an item is made", function() {
    		logic.make("cookie");
    		expect(bakery.supplies.flour).toEqual(3.5);
    		expect(bakery.supplies.eggs).toEqual(11);
    		expect(bakery.supplies.sugar).toEqual(16.5);
    		expect(bakery.supplies.spice).toEqual(4.5);
    	});

    	it("should not change the supply level if an ingredient is not used in a recipe", function() {
    		expect(bakery.supplies.spice).toEqual(5);
    		logic.make("cupcake");
    		expect(bakery.supplies.spice).toEqual(5);
    	});
	});
});