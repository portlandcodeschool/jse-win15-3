var objectA = {b:2, c:4, d: 1};
var objectB = {a:1, c:0, d:'narf'};

function intersection(a, b) {

var result = {};

var lengthA = Object.keys(a).length;
var lengthB = Object.keys(b).length;

var shortObj = (lengthA < lengthB) ? a : b;

//loop over shorters keys
 	for(var key in a) {
 		//if key is in both then --> if key ALSO in B
		if (key in b) {
			result[key] = (a[key] && b[key]);
		}
		//else ignore
	} return result;
		

	



};