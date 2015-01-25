function copy(obj) {
	if (typeof(obj) != 'object') {
		return undefined;
	}
	
	var copyOf = new Object();
	
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


var x = 'shoe';

function union(objA,objB) {
	if ((typeof(objA) != 'object') || (typeof(objB) != 'object')) {
		return undefined;
	}
	
	var unionObj = new Object();

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

	var intersectObj = new Object();
	
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

	var subtractObj = new Object();

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

function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}

var a = {a:1,b:0};
var b = {a:0,c:0};
var c = {c:1, d:0};
var d = {b:1, e:2};

//Assertions and tests
//Union tests:
expectValue(equal(union(a,b), {a:1,b:0,c:0}), true, "union(a,b)");
expectValue(equal(union(a,c), {a: 1, b: 0, c: 1, d: 0}), true, "union(a,b)");
expectValue(equal(union(b,d), {a: 0, b: 1, c: 0, e: 2}), true, "union(a,b)");

//Intersect tests:
expectValue(equal(intersect(a,b), {a:0}), true, "intersect(a,b)");
expectValue(equal(intersect(b,c), {c:0}), true, "intersect(b,c)");
expectValue(equal(intersect(c,d), {}), true, "intersect(a,b)");

//Subtraction tests:
expectValue(equal(subtract(a,b), {b:0}), true, "subtract(a,b)");
expectValue(equal(subtract(b,c), {a:0}), true, "subtract(c,b)...");
expectValue(equal(subtract(b,d), {a:0, c:0}), true, "subtract(b,d)");
