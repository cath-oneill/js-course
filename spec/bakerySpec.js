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

	xit("tells the current song if the user has made it a favorite", function() {
	    spyOn(song, 'persistFavoriteStatus');

	    player.play(song);
	    player.makeFavorite();

	    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
	});

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    xit("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});