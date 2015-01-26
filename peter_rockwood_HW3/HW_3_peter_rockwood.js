// ### Homework #3

// _Due Mon. Jan 26_

// ####Synopsis

// - **Problem 1:** A Cards Toolkit! _[Easy, 10% of total time]_ **Goals:** The deck of cards returns to demonstrate the _Toolkit_ object pattern. **Notes:** This is an important one, as its not the last time youll see it.

// - **Problem 2:** Testing and Simulating Arrays _[Moderate, 20%]_ **Goals:** Learn how to write unit tests by testing Arrays, and learn how arrays work by simulating one!

// - **Problem 3:** Object Comparison _[Moderate, 30%]_ **Goals:** Learn basic Object behaviors and how to compare and combine them.

// - **Problem 4:** Social network! _[Moderate to Difficult, 40%]_ **Goals:** Some more real-world practice using Objects. **Notes:** Problem 3 will probably help with aspects of this.

// ---

// **1)  A Cards Toolkit!**  _[Easy, 10%]_

// Revisit your playing card functions from homework 2, problem 5b.  Repackage them in a Toolkit pattern, as methods of a single master object.  You may hold that object in a global variable named anything you like (it's _cardTools_ in the template), but its name should not appear in the definitions of your methods; instead, refer to that object as `this`.  You'll need to change the form of your method definitions and the way they call other methods, but their logic and most of their code will remain the same.

// You may adopt the enclosed [template file](cards2-template.js).  Make sure your code still passes all the assertions there!

// It would be best to modify your own code from Homework 2, but if you didnt solve it before, you may adopt the posted solution instead and modify it here.

var cardReader = {

	isIntegerInRange: function(input, rangeMin, rangeMax){
		if(typeof(input) != 'number' || input%1 != 0){
			return false
		} else if(input < rangeMin || input > rangeMax){
  			return false
  		} else {
  			return true
  		}
	},

	rank: function(card) {
		if(! this.isIntegerInRange(card, 0, 51)){
  			return NaN; 
  		} else {
  			return Math.ceil((card+1)/4);
  		}
	},

	suit: function(card) {
		if(! this.isIntegerInRange(card, 0, 51)) {
			return NaN;
		} else {
  			return (card%4) + 1;
  		}		
	},

	cardID: function(rank,suit) {
		if(! this.isIntegerInRange(rank, 1, 13)){
			return NaN
		} else if(! this.isIntegerInRange(suit, 1, 4)){
			return NaN
		} else {
  			return ((rank - 1) * 4) + (suit-1);
		}
	},

	color: function(card) {
		if(! this.isIntegerInRange(card, 0, 51)) {
			return NaN
		}
		if(this.suit(card) <= 2) {
			return 'red';
		} else {
			return 'black';
		}	
	},

	name: function(card) {
		if(! this.isIntegerInRange(card, 0, 51)) {
			return NaN;
		}
		var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
		var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
		var rankName = cardRank[this.rank(card) -1];
		var suitName = cardSuit[this.suit(card) -1];

		return rankName + ' of ' + suitName;
	},

};


---

// **2)  Testing and Simulating Arrays** _[Moderate, 20%]_

// **a)**
// Write some code to verify that Arrays behave as advertised.  Specifically, write three different functions, each testing one method of Arrays:

// * `testPush(array)` should verify that `array.push(val)` adds _val_ to the end of _array_ and returns its new length;

// * `testPop(array)` should verify that `array.pop()` removes and return the last element of _array_;

// * `testJoin(array)` should verify that `array.join(delim)` concatenates all elements of _array_ into a single string, with string _delim_ inserted between each element.


// Each function should do several tests:  adding, removing, or joining values under various conditions to ensure that _array_ produces the correct outcome.  Each outcome may require multiple assertions to verify.  For each function, make sure one test is for how an empty array behaves.
// Any assertion which fails should log a message to the console, but your test functions dont need return values.

// More detailed instructions are in the [template file](array-test-template.js).

function assert(test, errorMessage){
	if(! test){
		console.log(errorMessage);
	} else {
		console.log('Ok!');
	}
}

function testPush(array){
	var initLength = array.length;
	assert(array.push('newItem') === initLength+1, "array.length not incremented");
	assert(array[initLength] === 'newItem', '"newItem" was not pushed')
}

function testPop(array){
	var initLength = array.length;
	if(initLength === 0){
		assert(array.pop() === undefined, 'popped empty array did not return undefined')
	};
	assert(array[initLength-1] === array.pop(), 'array.pop() did not return 
												last item in array');
	assert(array.length === initLength-1, 'array.length was not decremented')
}

function testJoin(array, delim){
	var testArray = [];

	if(delim === undefined){  // provide default delim if none is given
		delim = ',';
	};

	for(var i = 0; i < array.length; i++){ // make array from pseudo-array
		testArray[i] = array[i];
	}

	assert(array.join(delim) === testArray.join(delim), 'array.join() is not equal to the testString')
	return testArray;
}

// **b)** Now that you have a testing suite, implement your own version of Arrays!

// Create a pseudo-array, an ordinary object which is not an actual Array but behaves
// (somewhat) like one.  You may use a global variable _array_ to store
// your pseudo-array.
// It will have a property _length_, which is initially zero but needs to be adjusted as elements are added or removed.
// The elements of _array_ will be stored as properties named by their index numbers.
// So for example, an _array_ representing `[5,9]` would have three properties named "length", "0", and "1" whose values are 2, 5, and 9.

// For this exercise, you dont need to delete any _array_ elements beyond its length if the length shrinks; just ignore them.  Setting _array.length_ to 0 is enough to reset it to "empty".

// In addition to property _length_ and the element properties, give _array_ three more properties _pop_, _push_, and
// _join_ which are functions (i.e. methods) behaving exactly like (and returning the same values as) the
// corresponding methods of real Arrays.  When your _pop_ and _push_ methods modify the array, _length_ should change accordingly.

// You may use the enclosed [template file](pseudo-array-template.js) to get started.

// _Hint:_ Within each method, to refer to your array object, you may use either the global variable _array_ or the keyword _this_.

var array = {length:0,
			 			
};

array.pop = function() { //changes array, returns ??
	var last = this.length - 1;
	var memPop = this[last]
	delete this[last];
	this.length--;
	return memPop
	//...
}

array.push = function(newItem) { //changes array, returns a number
	var last = this.length;
	this[last] = newItem;
	this.length++;
	return this.length
	//...
}

array.join = function(seperator) { //returns a string
	seperator = seperator || ',';
	joinString = '';
	
	for(var i = 0; i < this.length; i++){
		if(i ===0){
			joinString = String(this[i]); 
		} else {	
			joinString = joinString + seperator + String(this[i]);
		}
	}
	return joinString
}

// **c)**  Test your pseudo-array implementation using your tests from part **a)**.  Your pseudo-array should be able to pass the same tests of push, pop, and join as a real Array.

////////////empty array tests
testPush(array);
-> "Ok!"

testPop(array);
-> "Ok!"

testJoin(array);
-> "Ok!"

////////////non-empty array tests

array.push(3); array.push('things'); array.push('in here'); array;

-> Object { 0: 3, 1: "things", 2: "in here", length: 3, pop: array.pop(), push: array.push(), 
            join: array.join() }
///////////push test
testPush(array);
-> "Ok!"

array;
-> Object { 0: 3, 1: "things", 2: "in here", 3: "newItem", length: 4, pop: array.pop(), push: array.push(), join: array.join() }

///////////pop test
testPop(array);
-> "Ok!"

array;
-> Object { 0: 3, 1: "things", 2: "in here", length: 3, pop: array.pop(), push: array.push(), join: array.join() }

//////////join test
testJoin(array);
-> "Ok!"
var arey = testJoin(array, ';)');
-> "Ok!"

arey.join(';)')
-> "3;)things;)in here"
array.join(';)')
-> "3;)things;)in here"

---

// **3)  Object Comparison** _[Moderate, 30%]_

// **a)**
// Write a function `copy(obj)`, which duplicates an object (not just copying a reference to it).  You only need a _shallow_ copy, duplicating only the top level of properties.  That is, if `obj` contains another object _inner_, the duplicate may share a reference to _inner_ rather than copying all of _inner_ too.

// Write another function to compare two objects:
// `equal(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties with the same values.  You only need _shallow_ equality: if `objA` and `objB` each have a property _inner_ referring to an object, check only that both _inner_ objects are identical (references to the same object); dont try to compare their properties.
// Note that two empty objects should be considered equal (by this function, not by the `==` operator).

// Write a third function:
// `similar(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties, regardless of their values.


function getProperties(obj){ // wrote this first, before I knew about Object.keys() 
	var keys = [];
	for(var key in obj){
		keys.push(key);
	}
	return keys;
}

function copy(obj){
	var objCopy = {};
	for(var key in obj){
	//console.log(key);
    objCopy[key] = obj[key];
	};
	return objCopy;
}

function equal(objA,objB) {
	var objAKeys = getProperties(objA);
	var objBKeys = getProperties(objB);

	if(objAKeys.length != objBKeys.length){
		return false
	};

	for(var i = 0; i < objA.length; i++){
		if(objAKeys[i] != objBKeys[i]){
			return false
		}
	};

	for(key in objA){
		if(objA[key] != objB[key]){
			return false
		}
	};
	return true
}

function similar(objA, objB){
	var objAKeys = getProperties(objA);
	var objBKeys = getProperties(objB);

	if(objAKeys.length != objBKeys.length){
		return false
	};

	for(var i = 0; i < objA.length; i++){
		if(objAKeys[i] != objBKeys[i]){
			return false
		}
	};
	return true
}


// **b)**
// We can interpret objects as _sets_ of properties, and merge those sets in various ways.  Lets define three such merges:

// *Union*: The union of objects A,B is a new object which contains all the properties found in either A or B.  If a property is found in both, the merged property gets the shared key and the value `(A[key] || B[key])`.
// For example: the union of `{a:1,b:0}` and `{a:0,c:0}` is `{a:1,b:0,c:0}`.

// *Intersection*: The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  The value of each intersecting property is `(A[key] && B[key])`.
// For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.

// *Subtraction*: The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  Note that this merge is usually not symmetric: _A minus B_ doesnt equal _B minus A_ (except in one case, which you should identify!)
// For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.

// Using those definitions, implement a function for each:

// * `union(objA,objB)`

// * `intersect(objA,objB)`

// * `subtract(objA,objB)`

// Each function should return a new object, or _undefined_ if either of their arguments is not an object.


function union(objA, objB){
	if(typeof objA != 'object' || typeof objB != 'object'){
		return undefined
	};

	var objC = copy(objA);
	for(var key in objB){
		if(! (key in objC)){
			objC[key] = objB[key];
		} else {
			objC[key] = objA[key] || objB[key];	// This is specified in the instructions, and has
												// the effect: if objA is truthy then return objA, 
												// otherwise return objB
		}
	}
	return objC
}

function intersection(objA, objB){
	if(typeof objA != 'object' || typeof objB != 'object'){
		return undefined
	};

	var objC = {};

	for(var key in objA){
		if(key in objB){
			objC[key] = objA[key] && objB[key]; // This is also specified in the instructions,
												// and has the effect: if objA is truthy then 
												// return objB, otherwise return objA
		}
	}
	return objC
}	

function subtraction(objA, objB){
	if(typeof objA != 'object' || typeof objB != 'object'){
		return undefined
	};

	var objC = {};

	for(var key in objA){
		if(! (key in objB)){
			objC[key] = objA[key];
		}
	}
	return objC
}	


// **c)**
// Write three sample assertions to test each of your three merging functions (9 total).
// Remember that when comparing your results to the expected results, youll need to see if objects are equal() but not identical.


var obj1 = {a:0, b:0, c:false, d:'not falsey'};
var obj2 =      {b:1, c:0,     d:true,         e:'truthy'};
var obj3 = {};

////////// Union tests
function assertUnionA(){
	resultObj = union(obj1, obj2);
	var eq = { a: 0, b: 1, c: 0, d: "not falsey", e: "truthy" };
	return assert(equal(resultObj, eq), 'bad union'); 
};

function assertUnionB(){
	resultObj = union(obj2, obj1)
	var eq = { a: 0, b: 1, c: false, d: true, e: "truthy" }
	return assert(equal(resultObj, eq), 'bad union'); 
};

function assertUnionC(){
	return assert(union(obj1, 'notAnObj') === undefined, 'failed to catch bad input'); 
};

////////// intersection tests

function assertIntersectionA() {
	var resultObj = intersection(obj1, obj2);
	var eq = {b: 0, c: false, d: true}
	return assert(equal(resultObj, eq), "bad intersection" ) 
};

function assertIntersectionB() {
	var resultObj = intersection(obj1, obj3);
	return assert(equal(resultObj, {}), "bad intersection" ) 
};

function assertIntersectionC() {
	return assert(intersection(obj1, 'notAnObj') === undefined, "failed to catch bad input" ) 
};

////////// subtraction tests

function assertSubtractionA() {
	var resultObj1 = subtraction(obj1, obj2);
	var resultObj2 = subtraction(obj2, obj1);
	var eq1 = {a: 0};
	var eq2 = {e:'truthy'}
	return assert(equal(resultObj1, eq1) && equal(resultObj2, eq2), "bad subtraction" ) 
};

function assertSubtractionB() {
	var resultObj1 = subtraction(obj1, obj3);
	var resultObj2 = subtraction(obj3, obj1);
	return assert(equal(resultObj1, obj1) && equal(resultObj2, {}), "bad subtraction" ) 
};

function assertIntersectionB() {
	return assert(subtraction(obj1, 'notAnObj') === undefined, "failed to catch bad input" ) 
};



// **d)**
// Finally: even if your functions implement perfectly the definitions above, 
// intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always be true, but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain!

When the two objects are either unionized or intersected, if the objects share keys that have
different values, one or the other value will have to be chosen for inclusion in the new hybrid 
object. Here we use the || and && operators in the union() and intersection() functions
to perform this decision. These operators choose which value to include based on the truthy or 
falsyness of the differing values. The exact decision procedures are stated in the comments of
of the union() and intersection() function bodies above.

example:

union({a:0}, {a:false})
-> Object { a: false }
union({a:false}, {a:0})
-> Object { a: 0 }

intersection({a:0}, {a:false})
-> Object { a: 0 }
intersection({a:false}, {a:0})
-> Object { a: false }

---






// **4) Social network!** _[40% total]_

// Assume a world in which no two people have the same name.
// Create an object `people` whose purpose is to remember everyone ever mentioned and the relationships between them.

// **a)** _[Moderate, 25%]_

// Write three methods for `people`:

// * `people.meet(nameA,nameB)` should accept two names, update `people`, and return the total number of times those two have met, including this new meeting.
// If either person isnt yet represented in `people`, add them.
// Then increment a count of the meetings between them.
// Assume that the order of arguments doesnt matter (i.e. `meet(A,B)` is the same as `meet(B,A)`), and that meeting oneself _(A==B)_ has no effect.

// * `people.haveMet(nameA,nameB)` should return a number greater than 0 if those people have met, and some falseish value if they haven't or don't exist.

// * `people.friendsOf(name)` should return a string listing the names of all people whom `name` has met at least once (or undefined if `name` doesnt exist).   List the names in alphabetical order, and make sure each name appears only once.

// You may use the enclosed [template file](social-network-template.js) to get started.

// _Hint:_ the `people` object should contain an index of all people, linking each name to an individual object for that person.  Each such person-object should have two properties:

// * `name` is a string for that persons name.  (This redundant copy of the name isnt necessary for the solution, but it may help you debug.)

// * `friends` is another index object, unique to each person, with multiple keys (one for each friend that person has met), each with a numeric value.  Because meetings are symmetric (each person meets the other), each number is duplicated in a corresponding property in the friends index; make sure you update both copies of the number during a meeting.

// Here is a diagram showing the data structure after `people` is fully initialized but before any method calls:

// ![](http://portlandcodeschool.github.io/jse-win15-3/social-network1.svg)

// Here is the data structure just after the first method call `people.meet('Matt','Tom')`:

// ![](http://portlandcodeschool.github.io/jse-win15-3/social-network2.svg)

var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
	if(nameA === nameB){ 
		console.log('a person can not meet themself' );
		return
	} else if(typeof nameA === 'string' && typeof nameB === 'string'){
		nameA = nameA.toLowerCase();
		nameB = nameB.toLowerCase();
	}


	if(! (nameA in people.index)){ // if the name isn't in the index, add it
		people.index[nameA] = { name: nameA, friends:{} };
	};
	if(! (nameB in people.index)){
		people.index[nameB] = {name: nameB, friends:{} };
	};

	if(nameB in people.index[nameA].friends){ // if already met, increment #meets
		people.index[nameA].friends[nameB]++ ;
		people.index[nameB].friends[nameA]++
	} else { 						  // if not already met, #meets = 1
		people.index[nameA].friends[nameB] = 1;
		people.index[nameB].friends[nameA] = 1;
	};

	return people.index[nameA].friends[nameB];
}


people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if(nameB in people.index[nameA].friends){ // if met, return #meet, else 0
		return people.index[nameA].friends[nameB];
	} else {
		console.log(nameA + ' and '+ nameB + ' have not met');
		return 0
	}
}

people.friendsOf = function(name) { //returns a string
	var frens = Object.keys(people.index[name].friends);
	return (frens.sort()).join()
}

// **b)** _[Difficult, 15%]_

// Write another method `people.friendsOfFriendsOf(name)` which returns a string listing, in alphabetical order, all the names of people within two degrees of separation from `name`: they've met either `name` or at least one of `name`'s friends.
// Your list may include `name` itself but no duplicates: any person should be listed only once regardless of the number of connections with `name`.

// (_Hint:_ the union of sets includes no duplicates!  Perhaps you could recycle code from somewhere?)

people.friendsOfFriendsOf = function(name){
	var allFrens = {};	//empty object to store all the friends
	allFrens = union(allFrens, people.index[name].friends); //add 1st degree friends to allFrens
	for(frnds in people.index[name].friends){  //Loop through 1st degree friends
		allFrens = union(allFrens, people.index[frnds].friends);	//add 2nd degree friends, no
																	//duplicates via union()
	};

	var allFrensArray = Object.keys(allFrens).sort();       //turn allFrens into array, sort,
															//return string
	return allFrensArray.join()
}


function friendsTests() {
  console.log('Meets//////////////////');
	console.log(people.meet('joe', 'mary'));
	console.log(people.meet('joe', 'mary'));

	console.log(people.meet('joe', 'jim'));

	console.log(people.meet('jim', 'mary'));
	console.log(people.meet('jim', 'mary'));
	console.log(people.meet('jim', 'mary'));
  

	console.log(people.meet('tina', 'mary'));

	console.log(people.meet('jim', 'tina'));
  
	console.log(people.meet('betty', 'tina'));
	console.log(people.meet('tina', 'betty'));

	console.log(people.meet('betty', 'mike'));
	console.log(people.meet('betty', 'carol'));


  console.log('haveMets//////////////////');
	console.log(people.haveMet('joe', 'mary'));
	console.log(people.haveMet('jim', 'mary'));
	console.log(people.haveMet('joe', 'tina'));
	console.log(people.haveMet('jim', 'betty'));

  console.log('friendsof//////////////////');
	console.log(people.friendsOf('jim'));
	console.log(people.friendsOf('joe'));
	console.log(people.friendsOf('mary'));
	console.log(people.friendsOf('tina'));
	console.log(people.friendsOf('betty'));
  
  console.log('friendsoffriends//////////////////');
	console.log(people.friendsOfFriendsOf('jim'));
	console.log(people.friendsOfFriendsOf('tina'));
	console.log(people.friendsOfFriendsOf('mike'));

}

