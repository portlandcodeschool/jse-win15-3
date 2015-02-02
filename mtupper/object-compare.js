/**
 * Created by michaelt on 1/31/15.
 */

function copy(obj) {
    if (typeof obj != 'object') {return undefined}
    var newObj = {};
    for (var prop in obj) {
        newObj[prop] = obj[prop];
    }
    return newObj;
}

function equal(objA, objB) {
    if (typeof objA != 'object' || typeof objB != 'object') {return undefined}
    if (objA == null && objB == null) { return true;}
    for (var prop in objA) {
        if (objA.hasOwnProperty(prop) != objB.hasOwnProperty(prop)) {
            return false;
        }
        if (typeof objA[prop] != 'object' && objA[prop] != objB[prop]) {
            return false;
        }
    }
    return true;
}

function similar(objA, objB) {
    if (typeof objA != 'object' || typeof objB != 'object') {return undefined}
    for (var prop in objA) {
        if (objA.hasOwnProperty(prop) != objB.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

function union(objA, objB) {
    if (typeof objA != 'object' || typeof objB != 'object') {return undefined}
    var newObj = {};
    for (var prop in objA) {
        newObj[prop] = objA[prop];
    }
    for (var prop in objB) {
        if (newObj.hasOwnProperty(prop)) {
            console.log("objA " + prop + ": " + objA[prop] + " 'or' objB " + prop + ": " + objB[prop]);
            console.log(objA[prop] || objB[prop]);
            newObj[prop] = (objB[prop] || objA[prop]);
        }
        newObj[prop] = objB[prop];
    }
    return newObj;
}

function intersect(objA, objB) {
    if (typeof objA != 'object' || typeof objB != 'object') {return undefined}
    var newObj = {};
    for (var prop in objA) {
        if (objB.hasOwnProperty(prop)) {
            newObj[prop] = (objA[prop] && objB[prop]);
        }
    }
    return newObj;
}

function subtract(objA, objB) {
    if (typeof objA != 'object' || typeof objB != 'object') {return undefined}
    var newObj = {};
    for (var prop in objA) {
        if (!objB.hasOwnProperty(prop)) {
            newObj[prop] = objA[prop];
        }
    }
    return newObj;
}

// Unit testing

function expectValue(result, expected, attemptStr) {
    if (result !== expected) {
        console.log(attemptStr+" expected result "+expected+", got "+result);
    }
}

// Test objects
var a = {a:1,b:0};
var b = {a:0,c:0};
var c = {c:1, d:0};
var d = {b:1, e:2};

// Union tests:
expectValue(equal(union(a,b), {a: 1, b: 0, c: 0}), true, "union(a,b)");
expectValue(equal(union(a,c), {a: 1, b: 0, c: 1, d: 0}), true, "union(a,c)");
expectValue(equal(union(b,d), {a: 0, b: 1, c: 0, e: 2}), true, "union(b,d)");

// Intersect tests:
expectValue(equal(intersect(a,b), {a:0}), true, "intersect(a,b)");
expectValue(equal(intersect(b,c), {c:0}), true, "intersect(b,c)");
expectValue(equal(intersect(c,d), {}), true, "intersect(c,d)");

// Subtraction tests:
expectValue(equal(subtract(a,b), {b:0}), true, "subtract(a,b)");
expectValue(equal(subtract(b,c), {a:0}), true, "subtract(b,c)...");
expectValue(equal(subtract(b,d), {a:0, c:0}), true, "subtract(b,d)");

/* 3d explanation:
Since similar(objA, objB) is only comparing the two objects for same properties,
when they are merged with union(objA, objB) they will always be true regardless of
order merged. Because the resulting values of these properties could be different,
they may return false when using equal(objA, objB).
 */