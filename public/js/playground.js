var endpointCount = 77;
var arrayOfObjects = [];
var counter = 0;


for (var i = 0; i < endpointCount; i++) {
	getData(i);
}

function getData(i) {
	$.ajax({
		type: 'GET',
		url: '/' + i,
		success: function(reply) {
			var json = JSON.parse(reply);
			if ($.isEmptyObject(json) === false) {
				addToArray(json, i);
			}
			counter ++;
			if (counter === endpointCount) {
				text = arrayOfObjects.join("");
				console.log(text);
				$('#container').append(text);
			}
		}
	});

}

function addToArray(json, i) {
	if (json["1"] === undefined) {
		string = json["0"];
	} else if (json["2"] === undefined) {
		string = json["0"] + json["1"]; 
	} else {
		string = json["0"] + json["1"] + json["2"];
		console.log(string);
	}
	arrayOfObjects[i] = string.replace(/\n/g, "<br />");
}



