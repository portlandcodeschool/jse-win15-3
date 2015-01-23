// JSE Winter 2015 Week 3 Homework Greg Borchers
// 

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


function testPush(array) { // accept an array to test, if provided
    // otherwise make a new one:
    if (!array) array = [];

    array.length = 0; //clear the array to be empty initially

    // Try several pushes, and for each try, check the status of
    //  the resulting array and the return value:
    expectValue(array.push('a'), 1, "array.push('a')"); //check return value
    expectValue(array[0], 'a', "array[0]"); // check array element
    expectValue(array.length, 1, "array.length"); // check array length

    expectValue(array.push('b'), 2, "array.push('b')");
    expectValue(array[0], 'a', "array[0]"); //should remain 'a'
    expectValue(array[1], 'b', "array[1]");
    expectValue(array.length, 2, "array.length");

    // pushing c then printing everything in the array just for fun (NOTE TO graders I added c)
    expectValue(array.push('c'), 3, "array.push('c')");
    expectValue(array.length, 3, "array.length");
    for (var i = 0; i < array.length; i++) {
        console.log("array[" + i + "] = " + array[i]);
    };
}

function testPop(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	array.push('a');
	array.push('b');
	
	var popVar = array.pop();

	expectValue(array[0], 'a', "array[0]"); //should return 'a'
	expectValue(popVar, 'b', "popped the second spot from array"); //should return 'b'
	expectValue(array.length, 1, "array.length"); // should be one, only as "a" in position 0


	// 3) pop again, then check as before
	var popVar = array.pop();

	expectValue(popVar, 'a', "popped the last spot from array"); //should return 'a'
	expectValue(array.length, 0, "array.length");

  
	// 4) array should now be empty!  check an attempt to pop when empty
	expectValue(array.pop(), 'undefined', "undefined pop from an empty array");
	
}

function testJoin(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	// 1) try a join on the empty array,
	//  then check the return value and its status (which should be unchanged)
	var joinedString = array.join();
	expectValue(array.length, 0, "array.length");



	// 2) push 'a', then join and check as before
	array.push('a');
	var joinedString = array.join();
	expectValue(array.length, 1, "array.length");
	expectValue(array[0], 'a', "array[0]"); // check array to see if a is still there
	expectValue(joinedString, 'a', "joinedString should have 'a' "); // check array element



	// 3) push 'b', then join and check as before
	array.push('b');
	var joinedString = array.join();
	expectValue(array.length, 2, "array.length");
	expectValue(array[1], 'b', "array[1]"); // check array to see if a is still there
	expectValue(joinedString, 'a,b', "joinedString should have 'a,b' "); // check array element


	// 4) push 'c', then join and check as before
	array.push('c');
	var joinedString = array.join();
	expectValue(array.length, 3, "array.length");
	expectValue(array[2], 'c', "array[2]"); // check array to see if a is still there
	expectValue(joinedString, 'a,b,c', "joinedString should have 'a,b,c' "); // check array element


	// 5) leave array unchanged, but join it with a different delimiter and check outcome
	var joinedString = array.join('^');
    expectValue(joinedString, 'a^b^c', "joinedString should have 'a^b^c' ");


	// 6) leave array unchanged, but join() it with no delimiter argument, and check that it
	//   uses the default delimiter ',' correctly
	var joinedString = array.join();
	expectValue(joinedString, 'a,b,c', "joinedString should have 'a,b,c' ");
}

// When those test functions are written, you can run them on built-in arrays
//  by calling the test with no arguments:
testPush();
testPop();
testJoin();

/*
// To test a custom array implementation (see problem 2), do this:
var myArray = {...something...}; //special object with push,pop, and join methods

testPush(myArray);
testPop(myArray);
testJoin(myArray);
*/