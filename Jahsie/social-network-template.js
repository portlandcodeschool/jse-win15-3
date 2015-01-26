var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
	
	//if names aren't yet objects, make them so 
	var objA = people.index[nameA]; //objA is now either undefined or a person
	var objB = people.index[nameB];
	if (!objA) { // if Person A is undefined make a person
		var objA = {name: nameA, friends: {}}; 
		people.index[nameA] = objA;
		objA.friends[nameB] = 0;
	} 
	if (!objB) { //same thing for person B
		var objB = {name: nameB, friends: {}};
		people.index[nameB] = objB;
		objB.friends[nameA] = 0;
	} 
	if (objA.friends[nameB] === undefined) { //if Person A hasn't met Person B yet
		objA.friends[nameB] = 0; //Add them as a friend and set the times they've met to 0
		objB.friends[nameA] = 0; //Same for person B with A
	}
	objA.friends[nameB] += 1; //increment count
	objB.friends[nameA] += 1; //increment count 

	return objA.friends[nameB]; //return number of times they have met

};


people.haveMet = function(nameA,nameB) { //returns a number or falsish
	var objA = people.index[nameA]; //objA is now either undefined or a person
	var objB = people.index[nameB];	//...
	if (objA.friends[nameB] === undefined) {
		var notMet = nameA + " and " + nameB + " do not know each other. Introduce them!";
		return notMet;
	}
	else return objA.friends[nameB];
};

people.friendsOf = function(name) { //returns a string
	var nameCheck = people.index[name];
	if (!nameCheck) {
		var notReal = name + "is not a real person!";
		return notReal;
	} 
  var friendArray = Object.keys(nameCheck.friends); 
	friendArray.sort();
	var alphabeticalFriends = friendArray.join(", ");
	return friendArray;
	//var finalFriendList = "These are " + name + "'s friends: " + alphabeticalFriends;
	//return finalFriendList;
};

people.meet("Jahsie", "Beyonce");
people.meet("Jahsie", "Beyonce");
people.meet("Jahsie", "Cher");
people.meet("Jay-Z", "Beyonce");
people.meet("Jahsie", "Dolly Parton");
people.meet("Jay-Z", "Dolly Parton");
people.friendsOf("Jahsie");


///////4 B
//Couldn't for the life of me get this to work. Tried nesting "for in" statements and using for loops with arrays. 
people.friendsOfFriendsOf = function(name) {
	var nameCheck = people.index[name]; //find the person
	var nameCheckNetwork = nameCheck[network];
	if (!nameCheckNetwork) {
		var nameCheckNetwork = {listofPeople: 0}
	}
	for (var key in nameCheck.friends) {
		nameCheckNetwork[key] = nameCheck.friends[key];
	}
	console.log(nameCheckNetwork);
	var friendArray = Object.keys(nameCheck.friends);
	console.log(friendArray);
	console.log(nameCheckNetwork);
	function addToList() {
		for (i = 0; i < friendArray.length; i++) {
			var testName = friendArray[i]; //picks a person from friend index
			var checkName = people.index[testName]; //directs to their object location
			var checkLoop = checkName[friends]; //dicrects to their "friends" object
			console.log("print friends friends");
			console.log(checkLoop);
			for (key in checkLoop) { //for the keys in their friend list
				if (key in nameCheckNetwork) { //if the key is not in the network keys
					nameCheckNetwork[key] = checkLoop[key]; //add it to the network keys
				} else {
					nameCheckNetwork[key] = checkLoop[key];
				}
			}
		}

	}
	console.log(nameCheckNetwork);
};

people.friendsOfFriendsOf("Jahsie");
