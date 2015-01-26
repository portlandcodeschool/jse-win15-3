//Part 1: A Cards Toolkit!>



var suitARR = [" Hearts", " Diamonds", " Spades", " Clubs"];
var rankARR = ["Ace ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", 
"Eight ", "Nine ", "Ten ", "Jack ", "Queen ", "King "];

function checkValidID(id) {
	if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	} else {
		return id;
	} 
;}

var cardTools = { 

rank: function(id) { // --> 1..13
		if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	}; 
	var r = id / 4;
	return Math.floor(r + 1);
},
//}

suit: function(id) { // --> 1..4
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
	var s = (id%4)+1;
	return s
},

cardID: function(rank,suit) { // --> 0..51
		if (rank <= 0 || rank > 13 || rank%1 !== 0) {
	alert("Sorry, your number is out of range. Only whole numbers 0-13, please!)");
	return NaN;
		} else if (typeof rank === "string" || typeof rank === "boolean"
		|| typeof rank === "undefined") {
	alert("Sorry, only whole numbers 0-13, please!");
	return NaN;
};
		if (suit <= 0 || suit > 4 || suit%1 !== 0) {
	alert("Sorry, your number is out of range. Only whole numbers 0-4, please!)");
	return NaN;
		} else if (typeof suit === "string" || typeof suit === "boolean"
		|| typeof suit === "undefined" || typeof suit === undefined) {
	alert("Sorry, only whole numbers 0-4, please!");
	return NaN;
};
	var cid = ((rank * 4) - 5)  + suit;
	return cid;
},

color: function(id) { // -->"red","black"
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
		if (this.suit(id) == 1 || this.suit(id) == 2){
		return "red";
	} else if (this.suit(id) == 3 ||  this.suit(id) == 4){
		return "black";
	};
},

name: function(id) { // --> string
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
	var rid = this.rank(id) - 1;
	var sid = this.suit(id) - 1;
	var name = rankARR[rid] + "of" + suitARR[sid];
	return name;
},

};

// TESTING:

function assert(claim,message) {
    if (!claim) console.error(message);
}
function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}
function expectNaN(result, attemptStr) {
	if (!Number.isNaN(result)) {
		console.log(attemptStr+" expected NaN, got "+result);
	}
}

//Part 2: Testing and Simulating Arrays

function assert(claim, message) {
	if (!claim) console.error(message);
}

function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}

function testPush(array){
if (!array) array = [];
array.length = 0;

	expectValue(array.push('a'), 1, "array.push('a')"); //check return value
	expectValue(array[0], 'a', "array[0]"); // check array element
	expectValue(array.length, 1, "array.length");	// check array length

	expectValue(array.push('b'), 2, "array.push('b')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]");
	expectValue(array.length, 2, "array.length");

	expectValue(array.push("c"), 3, "array.push(\"'c\"'')");
	expectValue(array[2], "c", "array[2]");
	expectValue(array[1], "b", "array[1]");
	expectValue(array[0], "a", "array[0]");
}

function testPop(array){

	if (!array) array = [];

	array.length = 0; //clear array

	expectValue(array.push('a', 'b'), 2, "array.push('a', 'b')");

	expectValue(array.pop(array.length), 'b', "array.pop(array.length)");
	expectValue(array[0], 'a', "array[0]");
	expectValue(array.length, 1, "array.length");

	expectValue(array.pop(array.length), 'a', "array.pop(array.length)");
	expectValue(array[0], undefined, "array[0]");
	expectValue(array.length, 0, "array.length");

	expectValue(array.pop(array.length), undefined, "array.pop(array.length)");
}

function testJoin(array){

	if (!array) array = [];

	array.length = 0;

	expectValue(array.join('_'), "", "array.join(\'_\')");

	expectValue(array.push('a'), 1, "array.push(\'a\')");
	expectValue(array.join('_'), "a", "array.join(\"_\")");
	expectValue(array.push('b'), 2, "array.push(\'b\')");
	expectValue(array.join('_'), "a_b", "array.join(\"_\")");
	expectValue(array.push('c'), 3, "array.push(\'c\')");
	expectValue(array.join('_'), "a_b_c", "array.join(\'_\')");

	expectValue(array.join('*'), "a*b*c", "array.join(\"*\")");

	expectValue(array.join(), "a,b,c", "array.join()");
}

//Question 2 Part b

var genericArray = {length: 0};

genericArray.push = function(pusher){
			this[this.length] = pusher;
			this.length++;
	};

genericArray.pop = function(){
		delete this[this.length];
		this.length--;
	};

genericArray.join = function(delim){
	var smashed = "";
	for (i = this.length - 1; i >= 0; i--) {
		smashed = (smashed + this[i] + " " + delim + " ")
	};
	return smashed;
};
genericArray.push("mildred");
genericArray.push("alice");
genericArray.push("fred");
genericArray.push("willingham");

	expectValue(genericArray.join('_'), "", "array.join(\'_\')");

	expectValue(genericArray.push('a'), 1, "array.push(\'a\')");
	expectValue(genericArray.join('_'), "a", "array.join(\"_\")");
	expectValue(genericArray.push('b'), 2, "array.push(\'b\')");
	expectValue(genericArray.join('_'), "a_b", "array.join(\"_\")");
	expectValue(genericArray.push('c'), 3, "array.push(\'c\')");
	expectValue(genericArray.join('_'), "a_b_c", "array.join(\'_\')");

	expectValue(genericArray.join('*'), "a*b*c", "array.join(\"*\")");

	expectValue(genericArray.join(), "a,b,c", "array.join()");

// Question 3 Object Comparison

//a

var tank = {
	color: "green",
	wheels: "tread",
};

var copy = function(obj) {
	twin = "";
	twin = obj;
	return twin;
};

var equal = function(objA, objB) {
	if (objA === objB) {
		return true
	} else {
		return false
	};
	};

}

//b
// try a (for in ) loop

var one = {a:1, b:2, c:3, d:4}
var two = {a:1, b:3, c:2, d:4}


var union = function(objA, objB) {
	var keysA = Object.keys(objA); //get keys from object and make length possible
	var lengthObjA = keysA.length; // length for "for" conditional
	

	var keysB = Object.keys(objB);
	var lengthObjB = keysB.length;

	var	together = {}; // target object for union

	for (i = 0; i <= lengthObjA - 1; i++)
		{var valueA = [keysA[i]]; // make valueA touchable
		var valueB = [keysB[i]];
		console.log(objA[valueA]);
		console.log("==" + valueA);
		console.log("==" + valueB)
		console.log(objB[valueB]);
		if (objA[valueA] == objB[valueB]){
			together[keysA[i]] = objA[valueA]
		} else {
			console.log("oh no");
		};
		};
		return together;
	};

// b try 2 with for (  in  )

//Notes: I want to compare keys directly together, currently (especially notable in
//the subtraction method, the key 'e' will still compare to key 'f'). Another
//issue: union doesn't currently add obj 'two's 'f' key:value pair.

var one = {a:1, b:2, c:3, d:4, e: 5}
var two = {a:1, b:3, c:2, d:4, f: 6}
var together = {}
var similar = {}
var difference = {}

var union = function(objA, objB) {
	together = {};
	for (key in objA || key in objB)
		(together[key] = objA[key]) || (together[key] = objB[key]);
			return together;

}

var intersection = function(objA, objB) {
    similar = {};
    for (key in objA)
        if (objA[key] == objB[key])
            similar[key] = objA[key];
            return similar;
};

var subtract = function(objA, objB) {
	difference = {};
	for (key in objA)
		difference[key] = objA[key]-objB[key];
		return difference;

}

//c Sample Tests

//d Explanations

//4 Social Network

