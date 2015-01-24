// JSE Winter 2015 Week 3 Homework Greg Borchers
// 

// these are the psuedo pArray functions
var pArray = {length:0};  // element properties will be added as needed

pArray.pop = function() { //changes pArray, returns ??
	if (pArray.length > 0 ){
		return pArray[pArray.length-1]; // removed one member from end of pArray
	} else {
		return undefined;
	}
};

pArray.push = function(arg) { //changes pArray, returns a number
	if (arg){
		pArray += arg; // add the new member(s) to the end 
		//return arg; //length; //pArray.length(); // added one member from end of pArray (but it might have multiple elements)
	} else {
		return undefined;
	}
};

pArray.join = function(delimiter) { //returns a string
	var returnString = {}; // empty string
	for (var i in pArray){
		returnString += pArray[i] + (i < pArray.length-1 ? delimiter : "");
	}
};


//***************** start of tests.
// Here's the old, simple assertion:
function assert(claim,message) {
    if (!claim) console.error(message);
}

// Here's a fancy new assertion, with better failure reporting:
function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}
// In your tests below, you may use either kind of assertion, or write your own!


function testPush(pArray) { // accept an pArray to test, if provided
    // otherwise make a new one:
    if (!pArray) pArray = [];

    pArray.length = 0; //clear the pArray to be empty initially

    // Try several pushes, and for each try, check the status of
    //  the resulting pArray and the return value:
    expectValue(pArray.push('a'), 1, "pArray.push('a')"); //check return value
    expectValue(pArray[0], 'a', "pArray[0]"); // check pArray element
    expectValue(pArray.length, 1, "pArray.length"); // check pArray length

    expectValue(pArray.push('b'), 2, "pArray.push('b')");
    expectValue(pArray[0], 'a', "pArray[0]"); //should remain 'a'
    expectValue(pArray[1], 'b', "pArray[1]");
    expectValue(pArray.length, 2, "pArray.length");

    // pushing c then printing everything in the pArray just for fun (NOTE TO graders I added c)
    expectValue(pArray.push('c'), 3, "pArray.push('c')");
    expectValue(pArray.length, 3, "pArray.length");
    for (var i = 0; i < pArray.length; i++) {
        console.log("pArray[" + i + "] = " + pArray[i]);
    };
}

function testPop(pArray) {
	if (!pArray) pArray = [];

	pArray.length = 0; //clear pArray

	pArray.push('a');
	pArray.push('b');
	
	var popVar = pArray.pop();

	expectValue(pArray[0], 'a', "pArray[0]"); //should return 'a'
	expectValue(popVar, 'b', "popped the second spot from pArray"); //should return 'b'
	expectValue(pArray.length, 1, "pArray.length"); // should be one, only as "a" in position 0


	// 3) pop again, then check as before
	var popVar = pArray.pop();

	expectValue(popVar, 'a', "popped the last spot from pArray"); //should return 'a'
	expectValue(pArray.length, 0, "pArray.length");

  
	// 4) pArray should now be empty!  check an attempt to pop when empty
	expectValue(pArray.pop(), 'undefined', "undefined pop from an empty pArray");
	
}

function testJoin(pArray) {
	if (!pArray) pArray = [];

	pArray.length = 0; //clear pArray

	// 1) try a join on the empty pArray,
	//  then check the return value and its status (which should be unchanged)
	var joinedString = pArray.join();
	expectValue(pArray.length, 0, "pArray.length");



	// 2) push 'a', then join and check as before
	pArray.push('a');
	var joinedString = pArray.join();
	expectValue(pArray.length, 1, "pArray.length");
	expectValue(pArray[0], 'a', "pArray[0]"); // check pArray to see if a is still there
	expectValue(joinedString, 'a', "joinedString should have 'a' "); // check pArray element



	// 3) push 'b', then join and check as before
	pArray.push('b');
	var joinedString = pArray.join();
	expectValue(pArray.length, 2, "pArray.length");
	expectValue(pArray[1], 'b', "pArray[1]"); // check pArray to see if a is still there
	expectValue(joinedString, 'a,b', "joinedString should have 'a,b' "); // check pArray element


	// 4) push 'c', then join and check as before
	pArray.push('c');
	var joinedString = pArray.join();
	expectValue(pArray.length, 3, "pArray.length");
	expectValue(pArray[2], 'c', "pArray[2]"); // check pArray to see if a is still there
	expectValue(joinedString, 'a,b,c', "joinedString should have 'a,b,c' "); // check pArray element


	// 5) leave pArray unchanged, but join it with a different delimiter and check outcome
	var joinedString = pArray.join('^');
    expectValue(joinedString, 'a^b^c', "joinedString should have 'a^b^c' ");


	// 6) leave pArray unchanged, but join() it with no delimiter argument, and check that it
	//   uses the default delimiter ',' correctly
	var joinedString = pArray.join();
	expectValue(joinedString, 'a,b,c', "joinedString should have 'a,b,c' ");
}

// When those test functions are written, you can run them on built-in pArrays
//  by calling the test with no arguments:
testPush();
testPop();
testJoin();

/*
// To test a custom pArray implementation (see problem 2), do this:
var mypArray = {...something...}; //special object with push,pop, and join methods

testPush(mypArray);
testPop(mypArray);
testJoin(mypArray);
*/