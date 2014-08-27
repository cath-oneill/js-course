(function() {

	var Logic = function()  {
	
		this.buy = function (ing, price, quantity) {
		    if (bakery.money >= price) {
			    bakery.money -= price;
			    bakery.supplies[ing] += quantity;	
			    return true;	    	
		    } else { return false; }
		  };

		this.make = function (bakedItem) {
		    var req = bakery.ingredients[bakedItem];
		    var enough_ingredients = true;

		    for (var name in bakery.supplies) {
		      if (req[name] !== undefined) {
		        if(req[name] > bakery.supplies[name]) {
		          enough_ingredients = false;
		        }
		      }
		    };
		    if (enough_ingredients) {
		      for(var name in bakery.supplies) {
		        if(req[name] !== undefined) {
		          bakery.supplies[name] -= req[name];
		        }
		      }	
		      return true;	      
		    } else { return false; }
		};
		
	
	};

	window.logic = new Logic();
})();