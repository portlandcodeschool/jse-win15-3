var array = {length:0};  // element properties will be added as needed

array.pop = function() { //changes array, returns ??
    if (this.length == 0) {
        return undefined;
    }

    var arrLast = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return arrLast;
};

array.push = function(vals) { //changes array, returns a number
    if (vals == undefined) return;
    for (var i = 0; i < arguments.length; i++) {
        this[this.length + i] = arguments[i];
        this.length += 1;
    }
    return this.length;
};

array.join = function(sep) { //returns a string
    if (this.length == 0) {return '""'}
    if (this.length == 1) {return this[0]}
	if (sep == undefined) {sep = ','}
    var str = '';
    for (var i = 0; i < this.length; i++) {
        if (i==0) {str = this[i]}
        else {str = str + sep + this[i]};
    }
    return str;
};


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
    expectValue(array.length, 1, "array.length");	// check array length

    expectValue(array.push('b'), 2, "array.push('b')");
    expectValue(array[0], 'a', "array[0]"); //should remain 'a'
    expectValue(array[1], 'b', "array[1]");
    expectValue(array.length, 2, "array.length");

    // That might be enough, but to be sure, push 'c' and test again here:
    //...
}

function testPop(array) {
    if (!array) array = [];

    array.length = 0; //clear array

    // 1) populate the array by pushing elements 'a' and 'b' onto it
    array.push('a', 'b');

    // 2) pop once, then check the return value, array contents, and array length
    expectValue(array.pop(), 'b', "array.pop()");
    expectValue(array[0], 'a', "array[0]");
    expectValue(array.length, 1, "array.length");

    // 3) pop again, then check as before
    expectValue(array.pop(), 'a', "array.pop()");
    expectValue(array[0], undefined, "array[0]");
    expectValue(array.length, 0, "array.length");

    // 4) array should now be empty!  check an attempt to pop when empty
    expectValue(array.pop(), undefined, "array.pop()");
    expectValue(array[0], undefined, "array[0]");
    expectValue(array.length, 0, "array.length");
}

function testJoin(array) {
    if (!array) array = [];

    array.length = 0; //clear array

    // 1) try a join on the empty array,
    //  then check the return value and its status (which should be unchanged)
    expectValue(array.join('-'), "\"\"", "array.join('-')");

    // 2) push 'a', then join and check as before
    array.push('a');
    expectValue(array.join('-'), 'a', "array.join('-')");

    // 3) push 'b', then join and check as before
    array.push('b');
    expectValue(array.join('-'), 'a-b', "array.join('-')");

    // 4) push 'c', then join and check as before
    array.push('c');
    expectValue(array.join('-'), 'a-b-c', "array.join('-')");

    // 5) leave array unchanged, but join it with a different delimiter and check outcome
    expectValue(array.join(' '), 'a b c', "array.join(' ')");

    // 6) leave array unchanged, but join() it with no delimiter argument, and check that it
    //   uses the default delimiter ',' correctly
    expectValue(array.join(), 'a,b,c', "array.join()");
}

// When those test functions are written, you can run them on built-in arrays
//  by calling the test with no arguments:
testPush(array);
testPop(array);
testJoin(array);
