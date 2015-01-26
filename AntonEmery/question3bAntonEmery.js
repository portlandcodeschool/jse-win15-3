var objectA = {a:1, b:2, c:4};
var objectB = {a:1, b:3, c:5};

function intersection(a, b) {

var result = {};

var lengthA = Object.keys(objectA).length;
var lengthB = Object.keys(objectB).length;

var shortObj = (lengthA < lengthB) ? a : b;
if (lengthA < lengthB) {
 //use A as shorter
}

 //loop over shorters keys
 	for(var key in objectA) {
 		//if key is in both then --> if key ALSO in B
		if (key in objectB) {
			obj[key] = (a[key] && b[key]);
		}
		//else ignore
	}
		
}	//end if A shorter
	



};