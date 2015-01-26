/////

var objA = {prop1: 1, prop2: 2, prop3: 1};
var objB = {prop1: 1, prop2: 1, prop3: 1};



//3.a.1
function copy(obj) {
	obj = objA;
	var objB;
	for (var key in objA)
	{objA[key]=objB[key];}
} 

//3.a.2

function equal(objA, objB) {
	var a = Object.keys(objA).length;
	var b = Object.keys(objB).length;
	if (a !== b) {
    return false; 
  }
	
  for (var key in objA)	{
		if (!(key in objB)) {
		return false; 
    	}
    	if (objA[key] !== objB[key]) {
    		return false;
    	}
	}
	return true;
}

//3.a.3
function similar(objA, objB) {
	var a = Object.keys(objA).length;
	var b = Object.keys(objB).length;
	if (a !== b) {
    	return false; 
  }
	
  for (var key in objA)	{
	if (!(key in objB)) {
		return false; 
    	}
	}
	return true;
}


//3b
objA = {a: 0, b: 1, c: 2};
objB = {b: 2, c: 11}

function union(objA,objB) {
	var newObj = {}; 
	//start with longer object
	var lengthA = Object.keys(objA).length;
	var lengthB = Object.keys(objB).length;

	var shortObj = (lengthA < lengthB)? objA : objB;
	var longObj = (lengthA < lengthB)? objB : objA;

	for (var key in longObj) {
		if (key in shortObj) {
			newObj[key] = (objA[key] || objB[key]);
		} else {
			newObj[key] = (longObj[key]);
		}
	}
	return newObj;
}

union(objA, objB);

function intersect(objA,objB) {
	var newObj = {};

	var lengthA = Object.keys(objA).length;
	var lengthB = Object.keys(objB).length;

	var shortObj = (lengthA < lengthB)? objA : objB;
	var longObj = (lengthA < lengthB)? objB : objA;

	for (var key in shortObj) {
		if (key in longObj) { //changed from shortObj?
			newObj[key] = (objA[key] && objB[key]);
		}
	}
	return newObj;
}

intersect(objA, objB);

objA = {a:1,b:0};
objB = {a:0,c:0};

function subtract(objA,objB) {
	var newObj = {};

	for (var key in objA) {
		if (!(key in objB)) { //changed from shortObj?
			newObj[key] = (objA[key]);
		}
	}
	return newObj;
}

subtract(objA, objB);

///3C
// TESTING:
function assert(claim,message) {
    if (!claim) {
    	console.error(message);
    }
}
assert(union({a:1,b:0},{a:0,c:0}) !== {a:1,b:0,c:0},  "Test 1 failed");
assert(union({a:1,b:0, c:6, d:8},{a:1, b:0, f:8}) !== {a:1,b:0, c:6, d:8, f:8},  "Test 2 failed");
assert(union({a: "banana", b:"apple"},{a:"apple", c:"cow"}) !== {a: "banana", b:"apple", c: "cow"},"Test 3 failed");
assert(intersect({a:1,b:0},{a:0,c:0}) !== {a:0},  "Test 4 failed");
assert(intersect({a:1,b:0, c:8},{b: 6, c:67}) !== {b:6, c:67},  "Test 5 failed");
assert(intersect({a: "banana", b:"apple"},{a:"apple", c:"cow"}) !== {a: "apple"}, "Test 6 failed");
assert(subtract({a:1,b:0},{a:0,c:0})!== { b: 0 }, "Test 7 failed");
assert(subtract({b:0},{a:1,b:0}) !== {},  "Test 8 failed");
assert(subtract({a: 7, b:0, f:11, q:7},{a:1,b:0}) !== {f:11, q:7},   "Test 9 failed");
