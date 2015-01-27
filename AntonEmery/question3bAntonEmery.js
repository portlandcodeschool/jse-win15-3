/*3b*/

var objectA = {b:2, d:1, e:4};
var objectB = {a:1, c:0, d:3};

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
		
	} return result;
		
};

function union(a, b) {
	var result = {};

	//find the shorter key?

	//loop over keys in a
	for(var key in a) {
		if(key in b) {
			//result is a key or b key
			result[key] = (a[key] || b[key]);
		}
	} return result;
}

function subtraction(a, b) {
	var result = {};

	//find shorter key?
	//loop over keys in a
	for(var key in a) {
		//if key is not in b
		if(!(key in b)) {
			result[key] = a[key];
		}
	}
	return result;
};

/*3c*/

//compares two objects
function equal(objA, objB) {
	if(Object.keys(objA).length !== Object.keys(objB).length) {
		return false;
	}
	for(var key in objA) {
		if (!(key in objB)) {
			return false;
		}
	} if(objA[key] !== objB[key]) {
		return false;
	}
	return true;
}


function expectValue(result, expected, attemptStr) {
if (!equal(result,expected)) {
console.log(attemptStr+" expected result "+expected+", got "+result);
}
}

expectValue(subtraction(objectA, objectB), {b:2, e:4}, 'subtraction(objectA, objectB');




