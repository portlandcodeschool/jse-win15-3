
var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
	//Check to see if the user entered the same name twice
	if (nameA == nameB) {				
		return "One cannot meet oneself!!!"
	} 
	//Check to see if the names entered are already in the object, if not then create them
	if (!people.present(nameA)) {
		people.addName(nameA);
	}
	if (!people.present(nameB)) {
		people.addName(nameB);
	}
	//Check if this is the first time these 2 people have met, set the 'met' counter to 1 if they haven't, 
	//increment the counter if they have
	if (!(nameB in people['index'][nameA]['friends'])){	
		people['index'][nameA]['friends'][nameB] = 1;	
	} else {
		people['index'][nameA]['friends'][nameB]++; 	
	}

	if (!(nameA in people['index'][nameB]['friends'])){	
		people['index'][nameB]['friends'][nameA] = 1;	
	} else {
		people['index'][nameB]['friends'][nameA]++;		
	}

	return people['index'][nameA]['friends'][nameB]; 	//output the number of times these 2 have met
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	//Return undefined if either name is not found in the object or the 2 names have yet to meet
	if ((!people.present(nameA)) || (!people.present(nameB)) || (!(nameA in people['index'][nameB]['friends']))) {
		return undefined;
	} else {
		return people['index'][nameB]['friends'][nameA]; //output the number of times the two people have met
	}
}

people.friendsOf = function(name) { //returns a string
	if (!people.present(name)) { 
		return undefined;	//return undefined if the name is not found in the object
	}
	var friendsList = []; //set an array to store the names from the object for sorting and output

	for (var names in people['index'][name]['friends']) {
		friendsList.push(names); //add all of the friends from this name to the array
	}

	friendsList.sort();	
	return friendsList.join(', '); //output the array as a string
	
}

people.friendsOfFriendsOf = function(name) {
	if (!people.present(name)) {
		return undefined;
	}
	//call function people.friendsOf and capture it in an array
	var friendsOfFriends = people.friendsOf(name).split(', ');

	//loop through the object friends of this person's friends and add them to the array if they are not 
	//already in it (or their own name!)
	for (var key in people['index'][name]['friends']) {
		for (var key2 in people['index'][key]['friends']) {
			if ((friendsOfFriends.indexOf(key2) == -1) && (key2 !== name)){
				friendsOfFriends.push(key2);
			}	
		}
	}

	friendsOfFriends.sort();
	return friendsOfFriends.join(', ');
}

people.present = function(name){  //returns true or false
	return (name in people.index);  //look for this person in the object
}

people.addName = function(name) { //adds the unfound name to the object
	people['index'][name] = {friends: {}};
	people['index'][name][name] = 0;
}

people.meet('Karen', 'Kyle');
people.meet('Karen', 'Jason');
people.meet('Karen', 'Jenn');
people.meet('Kyle', 'Jason');
people.meet('Kyle', 'Jenn');
people.meet('Kyle', 'Alex');
people.meet('Karen', 'Sarah');
people.meet('Sarah', 'Bob');

