// JSE Winter 2015 Week 3 Homework Greg Borchers
// 




// **c)**
// Write three sample assertions to test each of your three merging functions (9 total).
// Remember that when comparing your results to the expected results, you'll need to see if objects are equal() but not identical.

// **d)**
// Finally: even if your functions implement perfectly the definitions above, 
// intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always be true, 
// but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain!


//**3)  Object Comparison** _[Moderate, 30%]_

// **a)**
// Write a function `copy(obj)`, which duplicates an object (not just copying a reference to it).  
// You only need a _shallow_ copy, duplicating only the top level of properties.  
// That is, if `obj` contains another object _inner_, the duplicate may share a reference to _inner_ rather than copying all of _inner_ too.

var copy = function(obj1){
	var obj2 = {};
	for ( var i in obj1){
		obj2[i] = obj1[i];
	};
	return obj2;
};

// Write another function to compare two objects:
// `equal(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties with the same values.  
// You only need _shallow_ equality: if `objA` and `objB` each have a property _inner_ referring to an object, 
// check only that both _inner_ objects are identical (references to the same object); don't try to compare their properties.
// Note that two empty objects should be considered equal (by this function, not by the `==` operator).

var equal = function(obj1, obj2) {
    var equalityTest = true;

    var obj1Props = Object.keys(obj1);
    var obj2Props = Object.keys(obj2);

    obj1Props.sort();
    obj2Props.sort();

    for ( var i = 0; i < obj1Props.length; i++){
			if (obj1Props[i] !== obj2Props[i]){
	        	equalityTest = false;  // test for property name
	        };
	        if (obj1[obj1Props[i]] !== obj2[obj2Props[i]]) {
	        	equalityTest = false;  // test for property value
	        }
    };
    return equalityTest;
};

// Write a third function:
// similar(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties, regardless of their values.

var similar = function(obj1, obj2) {
    var similarityTest = true;

    for (var i in obj1) {
        var obj1Keys = Object.keys(obj1[i]);
        var obj2Keys = Object.keys(obj2[i]);

        obj1Keys.sort();
        obj2Keys.sort();

        if (obj1Keys != obj2Keys){
        	similarityTest = false;
        };
    };
    return similarityTest;
};

// *Union*: The union of objects A,B is a new object which contains all the properties found in either A or B.  
// If a property is found in both, the merged property gets the shared key and the value `(A[key] || B[key])`.
// For example: the union of `{a:1,b:0}` and `{a:0,c:0}` is `{a:1,b:0,c:0}`.
var union = function(obj1,obj2){
	// iterate and compare building the new object
	var objUnionTemp = {}; // temp var for holding the result

	objUnionTemp += subtract(obj1,obj2);
	objUnionTemp += subtract(obj2,obj1);
	objUnionTemp += intersect(obj1,obj2);

   	return objUnionTemp;
};


// *Intersection*: The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  
// The value of each intersecting property is `(A[key] && B[key])`.
// For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.
var intersect = function(objA,objB){

	var objMergeTarget = {};
	for (var i in objA) {
     	var found = false;
     	for (var j in objB){
     		if (objA[i] == objB[j]) { // found in both
             	found = true;
	     	};
	     	if (found) { 
	     		objMergeTarget += objA[i];
	     	};
	     }
     return objMergeTarget;
	};
};


// *Subtraction*: The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  
// Note that this merge is usually not symmetric: _A minus B_ doesn't equal _B minus A_ (except in one case, which you should identify!)
// For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.
var subtract = function(objA,objB){
	var objMergeTarget = {};

	for (var i in objA) {
     	var inTarget = true;
     	for (var j in objB){
     		if (objA[i] == objB[j]) { // IN objA and objB so don't add it to the Target
             	inTarget = false;
	     	};
	     	if (inTarget) { 
	     		objMergeTarget += objA[i];  //TODO check this logic
     		};
     
		};
	};
	return objMergeTarget;
};


// Tests

var myTestObject1 = {'Larry':'Larry'
					,'Greg':'Greg'
					,'Moe':'Moe'
					,'John':'John'
					,'Kurly':'Kurly'};

var myTestObject2 = {'Larry':'Larry'
					,'Greg':'Greg'
					,'Moe':'Moe'
					,'Jack':'Jack'
					,'Joe':'Joe'};


var myObjectCopy = {};

myObjectCopy = copy(myTestObject1);
console.log("should be same: lvalue=" + myObjectCopy + " rvalue = " + myTestObject1);

myTestObject2 = {};
var equalityTest = equal(myTestObject2,myObjectCopy);
console.log("should fail" + equalityTest);

var equalityTest = equal(myTestObject1,myObjectCopy);
console.log("should pass" + equalityTest);

var similarityTest = myTestObject1;
var similarityTest = similar(myTestObject1,myObjectCopy);
console.log("should pass" + similarityTest);

var similarityTest = {};
var similarityTest = similar(myTestObject1,myObjectCopy);
console.log("should fail" + similarityTest);

myObjectCopy = union(myTestObject1, myTestObject2);

// TODO more tests

// **c)**
// Write three sample assertions to test each of your three merging functions (9 total).
// Remember that when comparing your results to the expected results, you'll need to see if objects are equal() but not identical.


// **d)**
// Finally: even if your functions implement perfectly the definitions above, 
// intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always be true, 
// but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain!

// ***Answer***
// The Union and intersction operators only compare the property names and not the values of those properties.
// The similar function ignores the values so it will be ok when used with Union and Intersection results.
// The equal function evaluates the values so it will not be ok.
// The equal function is not "transitive" or whatever you are trying to say about two unions/intersection not being equal. 
// (it will value dependent)











