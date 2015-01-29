// 3) Object Comparison
// Based on office hours session Jan 25

// a.1) Copy function

var A = {a:0, b:0, c:0};
var B = {b:0, c:0};

function copy(obj) {
  var objCopy = {};
  for (var key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

console.log(copy(A));

// a.2) Equal function
// long version

function equal(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
  return false;
  }

  for (var key in objA) {
    if (!(key in objB)) {
      return false;
    }

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

return true;
}

console.log(equal(A, B));

// equal(a,b) - short version

function equal(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
  return false;
  }

  for (var key in objA) {
    if (!(key in objB) || (objA[key] !== objB[key])) { // true equality matters in this case
      return false;
    }
  }

return true;
}

console.log(equal(A, B));
console.log(equal(A, A));


// a.3) similar function

function similar(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
  return false;
  }

  for (var key in objA) {
    if (!(key in objB)) {
    return false;
    }
  }
}

console.log(similar(A, B));


// ============
// b) Union, Intersection, Subtraction

var A = {a:0, b:0, c:0};
var B = {b:0, c:0};

function union(objA, objB) {
  var union = copy(objA); // include all of objA, merged with ...
  for (var key in objB) { // ... all of objB
    union[key] = (union[key] || objB[key]); // union[key] = A[key] or B[key]
  }
  return union;
}

console.log(union(A, B));


function intersect(objA, objB) {
  var obj = {};
  var lengthA = Object.keys(objA).length;
  var lengthB = Object.keys(objB).length;
  var shortObj = (lengthA < lengthB)? objA : objB;
  var longObj = (lengthA < lengthB)? objB : objA;
  for(var key in shortObj) {
    if (key in longObj) {
      obj[key] = (objA[key] && objB[key]);
    }
  }
return obj;
}

console.log(intersect(A, B));


function difference(objA, objB) {
  var diff = copy(objA);
  for (var key in objB) {
    delete diff[key];
  }
  return diff;
}

console.log(difference(A, B));


// Assertions to test (write 3 each, 9 total)
// Test for equal, not identical

function assert(claim, warning) {
  if (!claim) console.log(warning);
}

// ============
// d) Explain why
//  similar(union(A,B), union(B,A)) is always true
//  equal(union(A,B), union(B,A)) may not be true
//  intersection(union(A,B), union(B,A)) may not be true

