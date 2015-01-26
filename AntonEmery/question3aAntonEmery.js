/*3a*/

var a = {a:1, b:2};

function copy(obj) {
 a = obj;
 var b = {};
 for (var key in a) {
 	b[key] = a[key];
 }
	return (b.a);
}

var objectA = {a:1, b:2, c:4};
var objectB = {a:1, b:3, c:5};
						

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


function similar(objA, objB) {
	if(Object.keys(objA).length !== Object.keys(objB).length){
		return false;
	}
	for(var key in objA) {
		if (!(key in objB)) {
			return false;
		} 
	}	return true;
};



