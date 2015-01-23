// JSE Winter 2015 Week 3 Homework Greg Borchers

// suit and rank arrays, including padding for "zero-th" element
		var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
		                'Jack','Queen','King'];
		var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];



var cardTools = { // a toolbox object used to group related methods

	// These functions are no longer global variables but instead
	// properties (methods) of the toolbox object:
	rank: function(id) {
		if (this.isValid(id,0,51)){
		 	return Math.floor(id/4)+1;
		} 
		else 
		{
			return NaN;  // ERROR condition
		}
	},

	suit: function(id) {
		if (this.isValid(id,0,51)) {
			return ((id % 4) + 1);
		}
		else 
		{
			return NaN;  // ERROR condition
		}

	},

	id: function(rank,suit) {
		if (this.isValid(rank,1,13) && this.isValid(suit,1,4)) {
		 	return ((rank - 1) * 4 + (suit - 1)); 
		}
		else 
		{
			return NaN;  // ERROR condition
		}
            
	},

	color: function(id) {
		var theSuit=this.suit(id); 

		if (!theSuit) {
			return NaN;
		} else if (theSuit < 3) {
			return "red";
		} 
		else {
			return "black";
		}
	},


	name: function(id) {
		//...
		// uses `this.rank()` and `this.suit()` to call the rank and suit methods above
		var theRank = this.rank(id);
    	var theSuit = this.suit(id);
    	
    	if ( theRank && theSuit ) {
    		return (rankNames[theRank]+' of '+suitNames[theSuit]);//build the name string
    	}
    	else  // we have an error (from bad inputs)
    	{
    		//assert ((theRank && theSuit), "ERROR in name function for -> Rank=" + theRank + " && theSuit=" + theSuit);
    		return (theRank && theSuit);  // ERROR condition
    	} 
        
	},

	// possibly other methods and properties, if needed, including...
	// a validation function?
	// Helper function:
	isValid: function(num,lowerLimit, upperLimit) { // Returns--> NaN, true
	    if ((typeof num) != "number"){
	    	return NaN; //wrong type
	    } 
	    if ((num % 1) !== 0) {
	        return NaN; //non-integer
	    }
	    if (num < lowerLimit || num > upperLimit) {
	        return NaN; // out of range
	    }

	    return true;    // it is valid
	},

}; // end cardTools definition




// ==== TESTING =====

// good old-fashined assert:
function assert(claim,message) {
    if (!claim) console.error(message);
}

//  new, improved assertion functions:
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

// You may need to define cardTools to alias another name:
// var cardTools = yourToolkitNameIfDifferent;

console.log("********** starting tests **********");
assert 		(cardTools.rank(0)===1,		"Test 1 failed"); //old-style assertion
expectValue	(cardTools.rank(0),  1,		"rank(0)");		  // same test in new style
assert 		(cardTools.rank(3)===1,		"Test 2 failed");
expectValue	(cardTools.rank(3),  1,		"rank(3)");
assert 		(cardTools.rank(51)===13,	"Test 3 failed");
expectValue	(cardTools.rank(51),  13,	"rank(51)");

assert 		(cardTools.suit(0)===1,		"Test 4 failed");
expectValue	(cardTools.suit(0),  1,		"suit(0)");
assert 		(cardTools.suit(5)===2,		"Test 5 failed");
expectValue	(cardTools.suit(5),  2,		"suit(5)");
assert 		(cardTools.suit(51)===4,	"Test 6 failed");
expectValue	(cardTools.suit(51),  4,	"suit(51)");

assert 		(cardTools.id(1,1)===0,		"Test 7 failed");
expectValue	(cardTools.id(1,1),  0,		"id(1,1)");
assert 		(cardTools.id(13,4)===51,	"Test 8 failed");
expectValue	(cardTools.id(13,4),  51,	"id(13,4)");
assert 		(cardTools.id(8,3)===30,	"Test 9 failed");
expectValue	(cardTools.id(8,3),  30,	"id(8,3)");

assert 		(cardTools.color(0)==='red',	"Test 10 failed");
expectValue	(cardTools.color(0),  'red',	"color(0)");
assert 		(cardTools.color(2)==='black',	"Test 11 failed");
expectValue	(cardTools.color(2),  'black',	"color(2)");

assert 		(cardTools.name(5)==='Two of Diamonds',	"Test 12 failed");
expectValue	(cardTools.name(5),  'Two of Diamonds',	"name(5)");
assert 		(cardTools.name(51)==='King of Clubs',	"Test 13 failed");
expectValue	(cardTools.name(51),  'King of Clubs',	"name(51)");


assert 		(Number.isNaN(cardTools.rank(52)),  "Test 21 failed"); //old style assertion
expectNaN	(cardTools.rank(52), "rank(52)");		  // same test in new style
assert 		(Number.isNaN(cardTools.rank("0")), "Test 22 failed");
expectNaN	(cardTools.rank('0'), "rank('0')");
assert 		(Number.isNaN(cardTools.rank(-1)),  "Test 23 failed");
expectNaN	(cardTools.rank(-1), "rank(-1)");
assert 		(Number.isNaN(cardTools.rank(2.5)), "Test 24 failed");
expectNaN	(cardTools.rank(2.5), "rank(2.5)");
assert 		(Number.isNaN(cardTools.rank(undefined)),"Test 25 failed");
expectNaN	(cardTools.rank(undefined), "rank(undefined)");

assert 		(Number.isNaN(cardTools.suit(52)),   "Test 26 failed");
expectNaN	(cardTools.suit(52), "suit(52)");
assert 		(Number.isNaN(cardTools.suit(false)),"Test 27 failed");
expectNaN	(cardTools.suit(false), "suit(false)");
assert 		(Number.isNaN(cardTools.suit(true)), "Test 28 failed");
expectNaN	(cardTools.suit(true), "suit(true)");
assert 		(Number.isNaN(cardTools.suit(-1)),   "Test 29 failed");
expectNaN	(cardTools.suit(-1), "suit(-1)");
assert 		(Number.isNaN(cardTools.suit(3.14)), "Test 30 failed");
expectNaN	(cardTools.suit(3.14), "suit(3.14)");


assert 		(Number.isNaN(cardTools.id(0,1)),   "Test 31 failed");
expectNaN	(cardTools.id(0,1), "id(0,1)");
assert 		(Number.isNaN(cardTools.id("1",1)), "Test 32 failed");
expectNaN	(cardTools.id('1',1), "id('1',1)");
assert 		(Number.isNaN(cardTools.id(1,5)),   "Test 33 failed");
expectNaN	(cardTools.id(1,5), "id(1,5)");
assert 		(Number.isNaN(cardTools.id(14,1)),  "Test 34 failed");
expectNaN	(cardTools.id(14,1), "id(14,1)");
assert 		(Number.isNaN(cardTools.id(-1,-1)), "Test 35 failed");
expectNaN	(cardTools.id(-1,-1), "id(-1,-1)");
assert 		(Number.isNaN(cardTools.id(0.5,1)), "Test 36 failed");
expectNaN	(cardTools.id(0.5,1), "id(0.5,1)");
assert 		(Number.isNaN(cardTools.id(1,NaN)), "Test 37 failed");
expectNaN	(cardTools.id(1,NaN), "id(1,NaN)");


assert 		(Number.isNaN(cardTools.color('apple')),"Test 41 failed");
expectNaN	(cardTools.color('apple'), "color('apple')");
assert 		(Number.isNaN(cardTools.color(true)),   "Test 42 failed");
expectNaN	(cardTools.color(true), "color(true)");
assert 		(Number.isNaN(cardTools.name(false)),   "Test 43 failed");
expectNaN	(cardTools.color(false), "color(false)");

assert 		(Number.isNaN(cardTools.name(-1)),      "Test 44 failed");
expectNaN	(cardTools.name(-1), "name(-1)");
assert 		(Number.isNaN(cardTools.name(52)),      "Test 45 failed");
expectNaN	(cardTools.name(52), "name(52)");
assert 		(Number.isNaN(cardTools.name(NaN)),     "Test 46 failed");
expectNaN	(cardTools.name(NaN), "name(NaN)");

console.log("********** tests completed **********");
