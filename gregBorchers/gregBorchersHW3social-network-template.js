// Greg Borchers Winter 2015 Javascript Evening Class


// this is the parent object (big box on left of diagram)
// * `name` is a string for that person's name.  (This redundant copy of the name isn't necessary for
// * `the solution, but it may help you debug.)
var people = {};

people.index = {};

//each property here will be named after a person
//and hold a reference to an object representing that person.

// * `friends` is another index object, unique to each person, with multiple keys (one for each friend
// * `that person has met), each with a numeric value.  Because meetings are symmetric (each person
// * `meets the other), each number is duplicated in a corresponding property in the friend's index;
// * `make sure you update both copies of the number during a meeting.

// * `people.meet(nameA,nameB)` should accept two names, update `people`, and return the total number
// of times those two have met, including this new meeting. If either person isn't yet represented in
// `people`, add them. Then increment a count of the meetings between them. Assume that the order of
// arguments doesn't matter (i.e. `meet(A,B)` is the same as `meet(B,A)`), and that meeting oneself
// _(A==B)_ has no effect.

people.meet = function(nameA,nameB) { // returns a number

	console.log(nameA + " just met " + nameB + " as a new meeting");
	// first case is New name A
	if ( !(nameA in people.index) ){
		people.index[nameA] = {[nameA]:nameA};    //works adds people
	}

	// first case is New name B
	if ( !(nameB in people.index) ){
		people.index[nameB] = {[nameB]:nameB};    //works adds people
	}

	// if not already a friend, add B as a friend to A
	if (!(nameB in people.index[nameA])){
		people.index[nameA][nameB] = {[nameB]:1};        // adding friends with only one meeting
	}
	else {  // nameB is already a friend, so increment the count of meetings
		people.index[nameA][nameB][nameB]++;
		
	}

	// if not already a friend, add A as a friend to B
	if (!(nameA in people.index[nameB]))
	{
		people.index[nameB][nameA] = {[nameA]:1};        // adding friends with only one meeting
	} else { //name A is already a friend, so increment the count of meetings
		people.index[nameB][nameA][nameA]++;
	}

	//TODO refactor these two cases into a smaller function or two.
	return people.index[nameB][nameA][nameA]; // return only one count, since they are identical.
};


// TESTING for haveMet(nameA,nameB)
// basically, have a bunch of meetings and see if anyone remembers they went to them.... real life testing

people.meet('larry','moe');
console.log(Object.keys(people.index));

// frank and jack meet 6 times
people.meet("frank","jack");
console.log(Object.keys(people.index));
people.meet("frank","jack");
console.log(Object.keys(people.index));
people.meet("frank","jack");
console.log(Object.keys(people.index));
people.meet("frank","jack");
console.log(Object.keys(people.index));
people.meet("frank","jack");
console.log(Object.keys(people.index));
people.meet("frank","jack");
console.log(Object.keys(people.index));

people.meet("frank","jack2");
console.log(Object.keys(people.index));
people.meet("frank","jack3");
console.log(Object.keys(people.index));

people.meet("jon","zack");
console.log(Object.keys(people.index));
people.meet("fred","mac");
console.log(Object.keys(people.index));
people.meet("frik","frak");
console.log(Object.keys(people.index));

people.meet("moe","jack");
console.log(Object.keys(people.index));
people.meet("jon","jack");
console.log(Object.keys(people.index));



// * `people.haveMet(nameA,nameB)` should return a number greater than 0 if those people have met, and
// * `some falseish value if they haven't or don't exist.
people.haveMet = function(nameA,nameB) { //returns a number or falsish
	var meetingCount = 0;
	if ( nameA in people.index[nameB]){
		meetingCount = people.index[nameB][nameA][nameA];
	}
	return meetingCount;
};

//TESTING  haveMet(nameA,nameB)
// frank and jack should have met 6 times, frik and frak have met once (based on testing above)
var frankJackCount = people.haveMet('frank','jack');
console.log('frank and jack meeting count is ' + frankJackCount);
var frikFrakCount = people.haveMet('frik','frak');
console.log('frik and frak meeting count is ' + frikFrakCount);



// * `people.friendsOf(name)` should return a string listing the names of all people whom `name` has
// * `met at least once (or undefined if `name` doesn't exist).   List the names in alphabetical order,
// * `and make sure each name appears only once.
people.friendsOf = function(name) { //returns a string
	var friendsList = [];
	if ( name in people.index){
		for ( var friend in people.index[name]) {
			friendsList.push(friend);	// TODO - FIX THIS LOGIC SO THAT 'friend of self' does not need hack below		
		}
	}
	friendsList.splice(friendsList.indexOf(name),1); // hack out the "friend of self" condition
	return friendsList;
};

// TESTING friendsOf(name)
// frank and jack are friends (from previous testing)
// frik and frak are friends
console.log("jack friends are " + people.friendsOf("jack"));
console.log("frank friends are " + people.friendsOf("frank"));
console.log("frik friends are " + people.friendsOf("frik"));
console.log("frak friends are " + people.friendsOf("frak"));


// Write another method `people.friendsOfFriendsOf(name)` which returns a string listing, in
// alphabetical order, all the names of people within two degrees of separation from `name`: they've
// met either `name` or at least one of `name`'s friends. Your list may include `name` itself but no
// duplicates: any person should be listed only once regardless of the number of connections with
// `name`.
// (_Hint:_ the union of sets includes no duplicates!  Perhaps you could recycle code from somewhere?)
people.friendsOfFriendsOf = function(firstPerson) { //returns a string
	var twoDegreesList = [];  // friends within two degrees list

	// get friends list of first person
	var firstPersonFriendsList = [];
	for (var secondPerson in people.index[firstPerson]){
		if ( people.haveMet(firstPerson, secondPerson)) {
			firstPersonFriendsList.push(secondPerson); 
		}		
	}
	twoDegreesList = deDupCat(firstPersonFriendsList, twoDegreesList); // needed a "special" helper... the deDupCat 

	var tempArray = [];
	//for each person in friends list build their "friends of the friend" into the twoDegrees list
	for (var i =0; i < firstPersonFriendsList.length; i++ ){
		tempArray = (people.friendsOf(firstPersonFriendsList[i]));
		twoDegreesList = deDupCat(twoDegreesList, tempArray);
		tempArray = [];
	}
	twoDegreesList.splice(twoDegreesList.indexOf(firstPerson),1); // hack out the "friend of self" condition
	return twoDegreesList.sort();  	
};


/// this sucks
// I am writing a deDupCat(array1, array2) routine because I cannot seem to get 
// conventional array concat and/or push routines to do what I want.....
// I promise to attend "coders of uneeded routines anonymous meeting" if I cannot fix this.

var deDupCat = function( array1, array2 ) {

	// a little defensive error checking to prevent endless loops below
	if ( !(Array.isArray(array1)) || !(Array.isArray(array1)) ) {
		// throws some error (in future)
		return;  // no soup-DeDupCat for you..
		//a bad person called this with a non-array type (yes... a very bad person, they are mean)
	}

	var returnArray = [];  // an array to hold the return value as we build it up

	returnArray = array1.concat(array2);  // make a pile there

	// remove duplicates
	for ( var i = 0; i < returnArray.length; i++ ) {

		while ( (returnArray.indexOf(returnArray[i]) !== i)     // keeps yanking duplicate items until only one left
			  &&(returnArray.indexOf(returnArray[i]) !== -1)) 	// special case for going off the (now shortened) end
		{
			returnArray.splice(i,1);
		}
	}
	return returnArray;
};


// TESTING for printing the second order friends list

var testFriendsList = ["frank", "jack", "jack2", "jack3", "jon", "larry", "moe", "zack"];

for ( var i = 0; i < testFriendsList.length; i++ ){
	console.log("<<<<<<<");
	var jackFriends2ndList = people.friendsOfFriendsOf(testFriendsList[i]);
	console.log("the first and second order friends of " + testFriendsList[i] + ", are as follows: ")
	console.log(jackFriends2ndList);
	console.log(">>>>>>>");
};


