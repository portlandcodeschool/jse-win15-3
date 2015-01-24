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

var array = {length:0};  // element properties will be added as needed

array.pop = function() { //changes array, returns ??
	if (array.length == 0) {
		return undefined;
	}

	var lastValue = array[array.length - 1];	//record the value of the last element in the array
	delete array[array.length - 1]; 			//delete the last element in the array (subtract 1 because the array elements start at 0)
	array.length--;  							//correct the length property 
	return lastValue;							//return the element that was deleted
}

array.push = function(input) { //changes array, returns a number
	array[array.length] = input;		//using the fact that length is always 1 larger than the last index of the array
	array.length++;						//increment the length property
	return array.length;				//return the new length of the array
}

array.join = function(delim) { //returns a string
	//Checking that there is something in the array
	if (array.length == 0) {			
		return '';
	}

	//If the user didn't input a delimiter use ,
	if (delim === undefined){
		delim = ',';
	}

	var outputStr = ''; 							
	for (var i = 0; i <= (array.length - 1); i++) {
		if (i == (array.length -1)) {
			outputStr += array[i]
		} else {
			outputStr += array[i] + delim;
		}
	}

	return outputStr;
}

//testing my pseudo-array
//Testing the push property:
expectValue(array.push('a'), 1, "array.push('a')"); //check return value
expectValue(array[0], 'a', "array[0]"); // check array element
expectValue(array.length, 1, "array.length");	// check array length

expectValue(array.push('b'), 2, "array.push('b')");
expectValue(array[0], 'a', "array[0]"); //should remain 'a'
expectValue(array[1], 'b', "array[1]");
expectValue(array.length, 2, "array.length");

expectValue(array.push('c'), 3, "array.push('c')");
expectValue(array[0], 'a', "array[0]"); //should remain 'a'
expectValue(array[1], 'b', "array[1]"); //should remain 'b'
expectValue(array[2], 'c', "array[2]"); //should remain 'c'
expectValue(array.length, 3, "array.length"); //array should be 3 elements long

//Testing the pop property:
expectValue(array.pop(), 'c', "array.pop()");
expectValue(array[2], undefined, "array[1]");
expectValue(array.length, 2, "array.length");

expectValue(array.pop(), 'b', "array.pop()");
expectValue(array[1], undefined, "array[0]");
expectValue(array.length, 1, "array.length");

expectValue(array.pop(), 'a', "array.pop()");
expectValue(array[0], undefined, "array[0]");
expectValue(array.length, 0, "array.length");

expectValue(array.pop(), undefined, "array.pop()");
expectValue(array[0], undefined, "array[0]");
expectValue(array.length, 0, "array.length");

//Testing the join property:
expectValue(array.join('check'), '', "array.join() on an empty array");
array.push('a');
expectValue(array.join('check'), 'a', "array.join('check') on array with 1 value");
array.push('b');
expectValue(array.join('check'), 'acheckb', "array.join('check') on array with 2 values" );
array.push('c');
expectValue(array.join('check'), 'acheckbcheckc', "array.join('check') on array with 3 values" );
expectValue(array.join('/'),'a/b/c', "array.join(','");
expectValue(array.join(), 'a,b,c', "array.join()");
