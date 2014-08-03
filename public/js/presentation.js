(function() {
	$('#bakery .make').on('click', function (e) {
	  	var bakedGood = $(e.currentTarget).data('good-type');
	  	if (logic.make(bakedGood)) {
	  		updateIngredientsList();
	  		var bakedItemDiv = $('<div class="' +bakedGood +'"></div>');
	  		$('#bakery .display').append(bakedItemDiv);
		} else {
			alert ("You do not have sufficient supplies.");
		}
	});

	$('#buy-supplies').submit( function (e) {
	  e.preventDefault();
	  var ing = $('#ing').val();
	  var qty = +$('#qty').val();
	  var price = +$('#price').val();
	  if (logic.buy(ing, price, qty)) {
		  updateIngredientsList();	  	
	  } else {
	  	alert ("You do not have sufficient funds for this purchase.");
	  };
	  $(':text').val('');
	}); 


	var updateIngredientsList = function () {
	    $('.ingredients .flour span').text(bakery.supplies.flour);
	    $('.ingredients .eggs span').text(bakery.supplies.eggs);
	    $('.ingredients .sugar span').text(bakery.supplies.sugar);
	    $('.ingredients .spice span').text(bakery.supplies.spice);
	};	

	updateIngredientsList();
})();