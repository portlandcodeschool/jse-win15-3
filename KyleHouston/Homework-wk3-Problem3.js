var copyOf = new Object();
var unionObj = new Object();
var intersectObj = new Object();
var subtractObj = new Object();

function copy(obj) {
	if (typeof(obj) != 'object') {
		return undefined;
	}
	for (var prop in obj) {
		copyOf[prop] = obj[prop];
	}

	return copyOf;
}

function equal(objA, objB) {
	if ((typeof(objA) != 'object') || (typeof(objB) != 'object')) {
		return undefined;
	}
	var equalOutput = true;
	for (var prop in objA) {
		if (objA[prop] != objB[prop]) {
			equalOutput = false;
		}
	}

	return equalOutput;
}

function similar(objA,objB) {
	if ((typeof(objA) != 'object') || (typeof(objB) != 'object')) {
		return undefined;
	}
	for (var prop in objA) {
		if (Object.keys(objB).indexOf(prop) === -1) {
			return false;
		}
	}

	return true;
}

var a = {a:1,b:0};
var b = {a:0,c:0};
var x = 'shoe';

function union(objA,objB) {
	if ((typeof(objA) != 'object') || (typeof(objB) != 'object')) {
		return undefined;
	}
	for (var prop1 in objA) {
		unionObj[prop1] = objA[prop1];
	}
	for (var prop2 in objB) {
		if (Object.keys(unionObj).indexOf(prop2) === -1) {
			unionObj[prop2] = objB[prop2];
		} else {
			unionObj[prop2] = (unionObj[prop2] || objB[prop2]);
		}
	}

	return unionObj;
}

function intersect(objA,objB) {
	if ((typeof(objA) != 'object') || (typeof(objB) != 'object')) {
		return undefined;
	}
	for (var prop in objA) {
		if (Object.keys(objB).indexOf(prop) != -1) {
			intersectObj[prop] = (objA[prop] && objB[prop]);
		}
	}

	return intersectObj;
}

function subtract(objA,objB) {
	if ((typeof(objA) != 'object') || (typeof(objB) != 'object')) {
		return undefined;
	}	
	for (var prop1 in objA) {
		subtractObj[prop1] = objA[prop1];
	}
	for (var prop2 in objB) {
		if (Object.keys(subtractObj).indexOf(prop2) != -1) {
			delete subtractObj[prop2];
		}
	}

	return subtractObj;
}

function assert(claim,warning) {
    if (!claim) {
    	console.log(warning);
    }
    return claim;
}