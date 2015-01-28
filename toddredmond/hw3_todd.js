
//1a

function errorcheck(id,min,max) {

  if ((typeof id) !='number') {
    return NaN;
	} else if (id%1 !== 0) {
  	return NaN;
	} else if (id < min || id > max) {
	return NaN;
	} else {
	return true;
	}
}
var cardTools = { // a toolbox object used to group related methods
//  ^^^^^^^^^could be called anything

  errorcheck: function(id,min,max) {
    if ((typeof id) !='number') {
    return NaN;
	} else if (id%1 !== 0) {
  	return NaN;
	} else if (id < min || id > max) {
	return NaN;
	} else {
	return true;
	}
},
    
	// These functions are no longer global variables but instead
	// properties (methods) of the toolbox object:
	rank: function(id) { 
	    return this.errorcheck(id,0,51)&&Math.floor((id/4)+1);
	},

	suit: function(id) {
      error=errorcheck(id,0,51)
      suitnum = (id%4)+1;
	    return error&&suitnum;
	},

	cardID: function(rank,suit) { 
        var rankid = this.errorcheck(rank,1,13);
        var suitid = this.errorcheck(suit,1,4);
      	return suitid&&rankid&&(((rank-1)*4 + suit)-1);
	},

	color: function(id) {
		
    if(cardTools.suit(id) < 2) {
      colorname = "red";
    } else {
      colorname = 'black';
    }
    return this.errorcheck(id, 0,51)&&colorname;
    },

	name: function(id) {
	  // array & variable assignments and declarations
	  var cRank = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var cSuit = ['Hearts','Diamonds','Spades','Clubs'];
	  var suitname = cSuit[this.suit(id) - 1];
	  nameid = cRank[this.rank(id)-1] + " of " + suitname;
	  return this.errorcheck(id, 0,51) && nameid;
  },
}; // end cardTools definition


// ==== TESTING =====

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

expectValue	(cardTools.rank(0),  1,		"rank(0)");		  // same test in new style
expectValue	(cardTools.rank(3),  1,		"rank(3)");
expectValue	(cardTools.rank(51),  13,	"rank(51)");

expectValue	(cardTools.suit(0),  1,		"suit(0)");
expectValue	(cardTools.suit(5),  2,		"suit(5)");
expectValue	(cardTools.suit(51),  4,	"suit(51)");

expectValue	(cardTools.cardID(1,1),  0,		"cardID(1,1)");
expectValue	(cardTools.cardID(13,4),  51,	"cardID(13,4)");
expectValue	(cardTools.cardID(8,3),  30,	"cardID(8,3)");

expectValue	(cardTools.color(0),  'red',	"color(0)");
expectValue	(cardTools.color(2),  'black',	"color(2)");

expectValue	(cardTools.name(5),  'Two of Diamonds',	"name(5)");
expectValue	(cardTools.name(51),  'King of Clubs',	"name(51)");


expectNaN	(cardTools.rank(52), "rank(52)");		  // same test in new style
expectNaN	(cardTools.rank('0'), "rank('0')");
expectNaN	(cardTools.rank(-1), "rank(-1)");
expectNaN	(cardTools.rank(2.5), "rank(2.5)");
expectNaN	(cardTools.rank(undefined), "rank(undefined)");

expectNaN	(cardTools.suit(52), "suit(52)");
expectNaN	(cardTools.suit(false), "suit(false)");
expectNaN	(cardTools.suit(true), "suit(true)");
expectNaN	(cardTools.suit(-1), "suit(-1)");
expectNaN	(cardTools.suit(3.14), "suit(3.14)");

expectNaN	(cardTools.cardID(0,1), "cardID(0,1)");
expectNaN	(cardTools.cardID('1',1), "cardID('1',1)");
expectNaN	(cardTools.cardID(1,5), "cardID(1,5)");
expectNaN	(cardTools.cardID(14,1), "cardID(14,1)");
expectNaN	(cardTools.cardID(-1,-1), "cardID(-1,-1)");
expectNaN	(cardTools.cardID(0.5,1), "cardID(0.5,1)");
expectNaN	(cardTools.cardID(1,NaN), "cardID(1,NaN)");

expectNaN	(cardTools.color('apple'), "color('apple')");
expectNaN	(cardTools.color(true), "color(true)");
expectNaN	(cardTools.color(false), "color(false)");

expectNaN	(cardTools.name(-1), "name(-1)");
expectNaN	(cardTools.name(52), "name(52)");
expectNaN	(cardTools.name(NaN), "name(NaN)");

//2a *************** Start of #2a ***********************/
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
	expectValue(array.push('c'), 3, "array.push('c')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]");
    expectValue(array[2], 'c', "array[1]");
	expectValue(array.length, 3, "array.length");
  
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}
	function testPop(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	// 1) populate the array by pushing elements 'a' and 'b' onto it
	//expectValue(array.push('a'));
	//expectValue(array.push('b'));
  	expectValue(array.push('a'), 1, "array.push('a')"); //check return value
	expectValue(array[0], 'a', "array[0]"); // check array element
	expectValue(array.length, 1, "array.length");	// check array length

	expectValue(array.push('b'), 2, "array.push('b')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array[1], 'b', "array[1]");
	expectValue(array.length, 2, "array.length");
  
	// 2) pop once, then check the return value, array contents, and array length
	//expectValue(array.pop());
  
	expectValue(array.pop('b'), 'b', "array.pop");
	expectValue(array[0], 'a', "array[1]"); //should remain 'a'
	expectValue(array.length, 1, "array.length");


	// 3) pop again, then check as before
	//...
	expectValue(array.pop('a'), 'a', "array.pop");
	expectValue(array[], , "array[[]]"); //should remain 'a'
  expectValue(array.length, 0, "array.length");
	// 4) array should now be empty!  check an attempt to pop when empty
	//...
}
function testPop(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	// 1) populate the array by pushing elements 'a' and 'b' onto it
    array.push('a');
	array.push('b');

	// 2) pop once, then check the return value, array contents, and array length
	//expectValue(array.pop());
	expectValue(array.pop('b'), 'b', "array.pop('b')");
	expectValue(array[0], 'a', "array[0]"); //should remain 'a'
	expectValue(array.length, 1, "array.length");


	// 3) pop again, then check as before
	expectValue(array.pop('a'), 'a', "array.pop('a')");
	expectValue(array[0], undefined, "array[]"); //should remain 'a'
	expectValue(array.length, 0, "array.length");
	// 4) array should now be empty!  check an attempt to pop when empty
	expectValue(array.pop(),undefined, "array.pop()");
}

function testJoin(array) {
	if (!array) array = [];

	array.length = 0; //clear array

	// 1) try a join on the empty array,
	//  then check the return value and its status (which should be unchanged)
	//... 
		array.join();

	// 2) push 'a', then join and check as before
	//...
		array.push('a');
    	expectValue(array.join(' '), 'a', "array.join('a b c')");
      console.log(array)
	// 3) push 'b', then join and check as before
    	array.push('b');
    	expectValue(array.join(' '), 'a b', "array.join('a b c')");
      console.log(array)
	// 4) push 'c', then join and check as before
    	array.push('c');
    	expectValue(array.join(' '), 'a b c', "array.join('a b c')");
      console.log(array)
	// 5) leave array unchanged, but join it with a different delimiter and check outcome
     	array.join('-');

	// 6) leave array unchanged, but join() it with no delimiter argument, and check that it
	//   uses the default delimiter ',' correctly
     	array.join();
}

// When those test functions are written, you can run them on built-in arrays
//  by calling the test with no arguments:
testPush();
testPop();
testJoin();

//2a *************** End of of #2a ***********************/
//3a *************** Start of #3 ***********************/


/*************************3a.1 ********************************************/

function copy(obj) {
var objB = {};
for (key in objA) {
	objB[key] = objA[key];
	console.log(objB);
} 
  return objB.name; 
}

copy({name:'todd', eye:'brown', hair:'brown'});


/*************************3a.2 ********************************************/

function exact(objA,objB) {
  var lengthA = Object.keys(objA).length;
  var lengthB = Object.keys(objB).length;
  if (lengthA !== lengthB) {
    return false;
  }
  
  for (var key in objA) {
    if (!(key in objB)) {
  		return false;
  	} // end conditional
    
  	if (objA[key] !== objB[key]) {
      console.log(objA[key])
  		return false;
  	} // end conditional
  		 
  	} // end for for/in

  return true;
  } // end function

exact({a:1,s:3}, {a:1,s:3});

/*************************3a.3 ********************************************/

function similar(objA,objB) {
  var lengthA = Object.keys(objA).length;
  var lengthB = Object.keys(objB).length;
  if (lengthA !== lengthB) {
    return false;
  }
  for (var key in objA) {
  	if (!(key in objB)) {
  		return false;
  	} // end conditional
  		 
  	} // end for for/in

  return true;
  } // end function
  

similar({a:2,s:3}, {a:1,s:2});

/***********Beginning of 3b Intersect/Union/Subtract***********************************/
function intersection(objA,objB) {
	var lengthA = Object.keys(objA).length;
	var lengthB = Object.keys(objB).length;
	var short, long;
  var obj = {};
	if (lengthA <= lengthB) {
		short = objA;
		long = objB;
	} else {
		short = objB;
		long = objA
	} // end else
		for (var key in short) {
			if (key in long) {
				obj[key] = (objA[key] && objB[key]);
			} // end conditional
		} // end for/in
  return obj;
	} // end of intersection function

intersection({a:1,b:2,c:3},{h:4,v:3,c:3})


function union(objA,objB) {
	var lengthA = Object.keys(objA).length;
	var lengthB = Object.keys(objB).length;
	var short, long;
  var obj = {};
	if (lengthA <= lengthB) {
		short = objA;
		long = objB;
	} else {
		short = objB;
		long = objA
	} // end else
		for (var key in objA) {
			//if (key in objB) {
				obj[key] = (objA[key] || objB[key]);
			//} // end conditional
		} // end for/in
    	for (var key in objB) {
			//if (key in objB) {
				obj[key] = (objA[key] || objB[key]);
			//} // end conditional
		} // end for/in
  return obj;
	} // end of intersection function

union({a:1,b:2,c:3},{h:4,v:3,c:3})

var obj = {};
function subtract(objA,objB) {
		for (var key in objA) {
			if (!(key in objB)) {
        obj[key] = (objA[key]);
			} // end conditional
		} // end for/in
    	
  return obj;
	} // end of intersection function

subtract({a:1,b:2,c:3},{h:4,v:3,c:3})

/***********End of section 3b Intersect/Union/Subtract***********************************/

/***********Start of 3c Testing***********************************/


function expectValue(result, expected, attemptStr) {
	if (result !== expected) {
		console.log(attemptStr+" expected result "+expected+", got "+result);
	}
}

function testIntersect(objA, objB) { 

	expectValue(intersection({{a:2,h:4,J:7},{U:6,h:4,K:3}), {h:4}, "array.push('a')"); //check return value


/***********End of 3c Testing***********************************/

/***********Start of 3d Question***********************************/

/*Finally: even if your functions implement perfectly the definitions above, 
intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always 
be true, but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain! 

The reason is that by switching which objct is first, specific operators will choose the first true value 
and not consider the other objects matching key. First instance, if ObjA and ObjB both have a 'B' key, but ObjA
is evaluated first, the value of the 'b' key of objA will be used no matter what value is contant in ObjB.B.
/*********** End of 3d Question ***********************************/

/***********Start of 4a Question***********************************/
//4a

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
//return total number of times met
//if not in people, add
//increment number of meetings
//order of arguements does not matter
	var objA = people.index[nameA];

		if (!objA) { // objA is either undefined or some obj
		  objA = {name:nameA, friends: {} }
		  people.index[nameA] = objA;
		  objA.friends[nameB] = 0;
    } 

	  objA.friends[nameB] += 1
  
  console.log(objA.friends);
	return objA.friends[nameB];
	};

//people.meet('todd','sam');

people.haveMet = function(nameA,nameB) { 
  console.log(objA.friends[nameB])
  if (people.index[nameB]&&people.index[nameA] > 0) {
    console.log("this is working")
  }
  console.log("No bueno");

}
people.haveMet('todd','sam');



people.friendsOf = function(name) { //returns a string
	//...
}


people.haveMet(nameA,nameB) {
	//return # > 0 if met
	//otherwise fasleish value
}
	friendsOf(name) {
	//return string listing names of all 
	//people whom name has met at least one of undefined 
	//if name doesn't exist.
	//list names in alpha order
	}
	}
}

