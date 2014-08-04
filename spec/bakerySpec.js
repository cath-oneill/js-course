describe("Logic......................", function() {


	it("should be able to record the purchase of ingredients", function() {
		logic.buy("flour", 6, 10);
		logic.buy("eggs", 12, 12);
		expect(bakery.supplies.flour).toEqual(14);
		expect(bakery.supplies.eggs).toEqual(24);
	});

    it("should subtract the amount of money spent on purchasing ingredients", function() {
      	logic.buy("flour", 100, 10);
		logic.buy("eggs", 85, 12);
		expect(bakery.money).toEqual(815);

    });

    xit("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });


  // demonstrates use of spies to intercept and test method calls
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