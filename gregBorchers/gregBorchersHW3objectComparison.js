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

    if ( obj1Props.length === 0 || obj2Props.length === 0 ) {
    	equalityTest = false;
    }

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

    for (var testObj in obj1) {
        if (!(testObj in obj1)){
        	similarityTest = false;
        	return similarityTest; // RETURN on first failure
        };
    };
    for (var testObj in obj2) {
        if (!(testObj in obj1)){
        	similarityTest = false;
        	return similarityTest; // RETURN on first failure
        };
    };
    return similarityTest;  // RETURN similarity true, if no mismatch is found
};

// *Union*: The union of objects A,B is a new object which contains all the properties found in either A or B.  
// If a property is found in both, the merged property gets the shared key and the value `(A[key] || B[key])`.
// For example: the union of `{a:1,b:0}` and `{a:0,c:0}` is `{a:1,b:0,c:0}`.
//
// strategy here is based on fundemental assumption
// the Union(A,B) operation can be composed into sub operations
// subtract(A,B) + intersection(A,B) + subtract(B-A) ----> yields the union of sets A and B
//

var union = function(obj1,obj2){
	// iterate and compare building the new object
	var objUnionTemp = {}; // temp object for holding the result

	// temp collections for each result
	console.log("test obj1 contains: " + Object.keys(obj1));
	console.log("test obj2 contains: " + Object.keys(obj2));


	var objUnionTemp1 = subtract(obj1,obj2);
	console.log("obj1 - obj2 results in " + Object.keys(objUnionTemp1));

	var objUnionTemp2 = subtract(obj2,obj1);
	console.log("obj2 - obj1 results in " + Object.keys(objUnionTemp2));

	var objUnionTemp3 = intersect_O_Rama_WithOps(obj1,obj2,"OR");  // required a special intersection to meet requirements above
	console.log("intersection of (obj1,obj2) results in " + Object.keys(objUnionTemp3));

	//TODO fix whatever my problem is here so I can concatenate these three object collections
   	return Object.keys(objUnionTemp1) + Object.keys(objUnionTemp2) + "," + Object.keys(objUnionTemp3);
};


// *Intersection*: The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  
// The value of each intersecting property is `(A[key] && B[key])`.
// For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.
var intersect = function(objA,objB){

	var objMergeTarget = {};  // the return set

	for (var i in objA) {
     	if (objA[i] in objB) { // IN objA and objB
             	objMergeTarget[i] = ([objA[i]] && [objB[i]]);  //in BOTH, so we put it into the return set
	     	};
	     };
	return objMergeTarget;

};


// *Subtraction*: The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  
// Note that this merge is usually not symmetric: _A minus B_ doesn't equal _B minus A_ (except in one case, which you should identify!)
// For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.
var subtract = function(objA,objB){
	var objMergeTarget = {};

	for (var i in objA) {
     	if (!(objA[i] in objB)) { // IN objA and NOT objB so don't add it to the Target
             	objMergeTarget[i] = [objA[i]];  //Only in ObjA, so we put it into the return set
	     	};
	     };
	return objMergeTarget;
};

// this is a function to provide a tailored intersection operation
// "intersect + Ops"  intersectionOps( objA, objB, iOp)
// objA, objB .... duh
// iOp ... this is either 'AND' or 'OR' or "NA" and drives what is returned
var intersect_O_Rama_WithOps = function(objA,objB,iOp){

	var objMergeTarget = {};  // the return set

	for (var i in objA) {
     	if (objA[i] in objB) { // IN objA and objB
     			switch (iOp) {
     				case "AND":
        				objMergeTarget[i] = ([objA[i]] && [objB[i]]);
        				break;
    				case "OR":
        				objMergeTarget[i] = ([objA[i]] || [objB[i]]);
        				break;
    				case "NA":
        				objMergeTarget[i] = [objA[i]];
        				break;
      			    default:
      			    	objMergeTarget[i] = "HW3_ERROR";
        	        	break;
        	    };    			
	     	};
	     };
	return objMergeTarget;

};



// Tests

var myTestObject1 = {'Larry':'Larry'  	// Larry, Greg and Moe are in both test objects
					,'Greg':'Greg'
					,'Moe':'Moe'
					,'John':'John'      // John and Kurly are only in obj1
					,'Kurly':'Kurly'};

var myTestObject2 = {'Larry':'Larry'
					,'Greg':'Greg'
					,'Moe':'Moe'
					,'Jack':'Jack'		// Jack and Joe are only in obj2
					,'Joe':'Joe'};


var myObjectCopy = {};

myObjectCopy = copy(myTestObject1);
console.log("should be same: lvalue=" + Object.keys(myObjectCopy) + " rvalue = " + Object.keys(myTestObject1));

myTestObject2 = {};
var equalityTest = equal(myTestObject2,myObjectCopy);
console.log("should fail " + equalityTest);

var equalityTest = equal(myTestObject1,myObjectCopy);
console.log("should pass " + equalityTest);

var similarityTest = "didNotRun";
var similarityTest = similar(myTestObject1,myObjectCopy);
console.log("should pass " + similarityTest);

var similarityTest = 'didNotRun';
myObjectCopy = {'sasauatch':'sasquatch'};
var similarityTest = similar(myTestObject1,myObjectCopy);
console.log("should fail " + similarityTest);

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


var unionArray = [];
unionArray = union(myTestObject1, myTestObject2);
console.log("union of (obj1,obj2,obj3) results in " + unionArray);

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











