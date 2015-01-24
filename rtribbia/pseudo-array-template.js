function assert(claim,message) {
    if (!claim) console.error(message);
}

// Here's a fancy new assertion, with better failure reporting:
function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}

function defineMethods(array) {
	array.pop = function() { //changes array, returns ??
		//...
		var o = this[this.length-1];
		delete this[this.length-1];
		this.length--;
		return o;
	}

	array.push = function(val) { //changes array, returns a number
		//...
		this[this.length] = val;
		return ++this.length;
	}

	array.join = function(delim) { //returns a string
		delim?null:delim=',';
		var outp = '';
		for (var key in this) {
			if ((key % 1) === 0) {
				outp += this[key] + delim;
			}
		}
		return outp.slice(0, -1);
	}


}



//TESTING
//ARRAY.POP
var array = {length:0}; 
defineMethods(array);
array.push('a');
array.push('b');
expectValue(array.pop(), "b", 'array.pop()');
expectValue(array[1], undefined, 'array[1]');
expectValue(array.length, 1, 'array.length'); 
expectValue(array.pop(), "a", 'array.pop()');  
expectValue(array[0], undefined, 'array[0]');  
expectValue(array.length, 0, 'array.length');  
expectValue(array.pop(), undefined, 'array.pop()');


//TESTING
//ARRAY.JOIN
var array = {length:0}; 
defineMethods(array);
expectValue(array.join(','), '', 'array.join(\',\')');
array.push('a');
expectValue(array.join(','), 'a', 'array.join(\',\')');
array.push('b');
expectValue(array.join(','), 'a,b', 'array.join(\',\')');
array.push('c');
expectValue(array.join(','), 'a,b,c', 'array.join(\',\')');
expectValue(array.join('|'), 'a|b|c', 'array.join(\'|\')');
expectValue(array.join(), 'a,b,c', 'array.join()');



//TESTING
//ARRAY.PUSH
var array = {length:0}; 
defineMethods(array);

expectValue(array.push('a'), 1, "array.push('a')"); //check return value
expectValue(array[0], 'a', "array[0]"); // check array element
expectValue(array.length, 1, "array.length");	// check array length
expectValue(array.push('b'), 2, "array.push('b')");
expectValue(array[0], 'a', "array[0]"); //should remain 'a'
expectValue(array[1], 'b', "array[1]");
expectValue(array.length, 2, "array.length");