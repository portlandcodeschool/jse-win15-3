//1
var cardTools = {

	 RANKS : ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
	 SUITES : ["Hearts", "Diamonds", "Spades", "Clubs"],

		createCardDeck : function(){
		var cardDeck = [];
			
		for (var i = 0, rankLength = this.RANKS.length; i < rankLength; i++) {
			for (var j = 0, suitLength = this.SUITES.length; j < suitLength; j++){
					cardDeck.push(this.RANKS[i] + " of " + this.SUITES[j]);
				}
		}
		return cardDeck;

	},


	rank : function(id) {
		//rank(id) returns 1-13, representing the card's rank (for an id between 0-51).
		//return RANKS[Math.floor(id/this.SUITES.length)]; this returns rank name 
		if ( id > 51 || id < 0 || typeof id === 'string' || id % 1 !== 0 || id === undefined) {
			return NaN;
		}
		return Math.floor(id/this.SUITES.length) + 1; //return RANKS index number
	},

	suit : function(id) {
		//suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
		//return this.SUITES[id % this.SUITES.length]// return suit name
		if ( id > 51 || id < 0 || typeof id === 'boolean' || id % 1 !== 0 || id === undefined) {
			return NaN;
		}
		return id % this.SUITES.length + 1; // returns suit index number
	},

	color: function(id) {
		//color(id) returns "red" or "black"
		//hearts red, diamonds red,
		if (typeof id === 'string' || id === true){
			return NaN;
		}
		var color = cardTools.suit(id);
		if (color > 1) {
			return "black";
		} else {
			return "red";
		}

	},

	name: function (id) {
		if ( id > 51 || id < 0 || typeof id === 'string' || id == false || id % 1 !== 0 || id === undefined) {
			return NaN;
		}
		var cards = this.createCardDeck();
		return cards[id];
	},

	cardID: function(rank, suit) {
		//returns 0-51, identifying the card id of a given rank and suit.
		if (rank > 13 || rank < 1 || typeof rank == 'string' || typeof rank === 'boolean'|| rank % 1 !== 0){
			return NaN;
		} 
		if (suit > 4 || suit % 1 !== 0) {
			return NaN;
		}
		var rankString = this.RANKS[rank-1], suitString = this.SUITES[suit-1];
		return this.SUITES.length * this.RANKS.indexOf(rankString) + this.SUITES.indexOf(suitString);
		}
};

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

assert 		(cardTools.cardID(1,1)===0,		"Test 7 failed");
expectValue	(cardTools.cardID(1,1),  0,		"cardID(1,1)");
assert 		(cardTools.cardID(13,4)===51,	"Test 8 failed");
expectValue	(cardTools.cardID(13,4),  51,	"cardID(13,4)");
assert 		(cardTools.cardID(8,3)===30,	"Test 9 failed");
expectValue	(cardTools.cardID(8,3),  30,	"cardID(8,3)");

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


assert 		(Number.isNaN(cardTools.cardID(0,1)),   "Test 31 failed");
expectNaN	(cardTools.cardID(0,1), "cardID(0,1)");
assert 		(Number.isNaN(cardTools.cardID("1",1)), "Test 32 failed");
expectNaN	(cardTools.cardID('1',1), "cardID('1',1)");
assert 		(Number.isNaN(cardTools.cardID(1,5)),   "Test 33 failed");
expectNaN	(cardTools.cardID(1,5), "cardID(1,5)");
assert 		(Number.isNaN(cardTools.cardID(14,1)),  "Test 34 failed");
expectNaN	(cardTools.cardID(14,1), "cardID(14,1)");
assert 		(Number.isNaN(cardTools.cardID(-1,-1)), "Test 35 failed");
expectNaN	(cardTools.cardID(-1,-1), "cardID(-1,-1)");
assert 		(Number.isNaN(cardTools.cardID(0.5,1)), "Test 36 failed");
expectNaN	(cardTools.cardID(0.5,1), "cardID(0.5,1)");
assert 		(Number.isNaN(cardTools.cardID(1,NaN)), "Test 37 failed");
expectNaN	(cardTools.cardID(1,NaN), "cardID(1,NaN)");


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

//2


function testPush(array){
	return ((array.push("added").valueOf() === array.length)
		&&
		(array[array.length - 1] === "added"));
}

function testPop(array){
	return array.pop()
}








//3
//a
function copy(obj){
	var dupObj = {};
	for (var key in obj){
		dupObj[key] = obj[key];
	}
	return dupObj;
}

function equal(objA, objB){
	if (Object.keys(objA).length !== Object.keys(objB).length){
		return false;
	}

	for (var key in objA) {
		if (! (key in objB)) {
			return false;
		}
		if (objA[key] !== objB[key]) {
			return false;
		}

	}

	return true;
}

function similar(objA, objB){
		if (Object.keys(objA).length !== Object.keys(objB).length){
		return false;
	}

	for (var key in objA) {
		if (! (key in objB)) {
			return false;
		}
	} return true;
}



//b


function union(a,b){
	var obj = {};
	for (var keyA in a){
		obj[keyA] = a[keyA];
	}
	for (var keyB in b){
		if(!(keyB in a)){
				obj[keyB] = b[keyB];
			}
	}
	return obj;
	}


function intersect(a,b){
	var obj = {};
	var lengthA = Object.keys(a),
		lengthB = Object.keys(b);

	var shortObj = lengthA < lengthB ? a : b;
	var longObj = lengthA < lengthB ? b : a;

		for (var key in shortObj){
			if (key in longObj){
				obj[key] = (shortObj[key] && longObj[key]);
			}
		}
		return obj;
	}


//(a[key] || b[key])

difference






//d 











//4


var people = {};

//example person
//ian = {name: 'ian', friends: ['joe', 'steve', 'kevin']}

people.meet = function(nameA, nameB){
	// check if nameA is already present in people object, 
	// if not create,
	// 	same with nameB,

	//people.nameA.name and people.nameA.friends

	//person is an object with its own properties as well as an item in the friends' array //

	if (!(nameA in people)){


		people.name += nameA;
		nameA.name = nameA;
		nameA.friends += nameB;

	} else {
		people.index += nameA;

	}

	
}



var people = {};

people.index = {

}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
	//...
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	//...
}

people.friendsOf = function(name) { //returns a string
	//...
}




































