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

	// if not a friend, add B as a friend to A
	if (!(nameB in people.index[nameA])){
		people.index[nameA][nameB] = {[nameB]:1};        // adding friends  only adds one friend
	}
	else {  // nameB is already a friend, so increment the count
		people.index[nameA][nameB][nameB]++;
		
	}

	// if not a friend, add A as a friend to B
	if (!(nameA in people.index[nameB]))
	{
		people.index[nameB][nameA] = {[nameA]:1};        // adding friends  only adds one friend
	} else { //name A is already a friend, so increment the count
		people.index[nameB][nameA][nameA]++;
	}

	//TODO refactor these two cases into a smaller function or two.
	return 1; // decide what to return
};

// TESTING up to here

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

//TESTING  haveMet
// frank and jack should have met 6 times, frik and frak have met once
var frankJackCount = people.haveMet('frank','jack');
console.log('frank and jack meeting count is ' + frankJackCount);
var frikFrakCount = people.haveMet('frik','frak');
console.log('frik and frak meeting count is ' + frikFrakCount);



// * `people.friendsOf(name)` should return a string listing the names of all people whom `name` has
// * `met at least once (or undefined if `name` doesn't exist).   List the names in alphabetical order,
// * `and make sure each name appears only once.
people.friendsOf = function(name) { //returns a string
	var friendsList = [""];
	if ( name in people.index){
		for ( var friend in people.index[name]) {
			friendsList.push(friend);	// TODO - FIX THIS SO THAT 'friend of self' IS NOT ADDED		
		}
	}
	return friendsList.join(", ");
};

// TESTING friendsOf
// frank and jack are friends
// frik and frak are friends
console.log("jack friends are" + people.friendsOf("jack"));
console.log("frank friends are" + people.friendsOf("frank"));
console.log("frik friends are" + people.friendsOf("frik"));
console.log("frak friends are" + people.friendsOf("frak"));


// Write another method `people.friendsOfFriendsOf(name)` which returns a string listing, in
// alphabetical order, all the names of people within two degrees of separation from `name`: they've
// met either `name` or at least one of `name`'s friends. Your list may include `name` itself but no
// duplicates: any person should be listed only once regardless of the number of connections with
// `name`.
// (_Hint:_ the union of sets includes no duplicates!  Perhaps you could recycle code from somewhere?)
people.friendsOfFriendsOf = function(name) { //returns a string
	var twoDegreesList = [""];  // two degrees list

	// firstPerson = name 
	var firstPerson = name;

	// get friends list of first person
	var firstPersonFriendsList = [""];
	for (var secondPerson in people.index[firstPerson]){
		if ( people.haveMet(firstPerson, secondPerson)) {
			firstPersonFriendsList.push(secondPerson);
		}
			
	}
	twoDegreesList.join(",", firstPersonFriendsList);

	//for each person in friends list build their friends into the list
	for (var i =0; i < firstPersonFriendsList.length; i++ ){
		twoDegreesList.join(",", people.friendsOf(firstPersonFriendsList[i]));
			
	}


	return firstPersonFriendsList.sort();  //TODO finish this to grab the second order friends
	// return twoDegreesList.sort();

};


// TESTING
var jackFriends2ndList = people.friendsOfFriendsOf('jack');
console.log(jackFriends2ndList);



	// if friend hasmet somebody in people list
		// add friend from people list to twoDegrees list

	// sort list


