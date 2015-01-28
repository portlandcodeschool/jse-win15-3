
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

function testIntersect(objA, objB) { // accept an array to test, if provided
	// otherwise make a new one:
	if (!array) array = {};

	//array.length = 0; //clear the array to be empty initially

	// Try several pushes, and for each try, check the status of
	//  the resulting array and the return value:
	expectValue(intersection({{a:2,h:4,J:7},{U:6,h:4,K:3}), {h:4}, "array.push('a')"); //check return value


/***********End of 3c Testing***********************************/

/***********Start of 3d Question***********************************/

/*Finally: even if your functions implement perfectly the definitions above, 
intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always 
be true, but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain! 

The reason is that by switching which objct is first, specific operators will choose the first true value 
and not consider the other objects matching key. First instance, if ObjA and ObjB both have a 'B' key, but ObjA
is evaluated first, the value of the 'b' key of objA will be used no matter what value is contant in ObjB.B.


