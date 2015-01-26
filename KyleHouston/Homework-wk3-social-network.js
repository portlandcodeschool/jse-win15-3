
var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
	if (nameA == nameB) {
		return "You cannot meet oneself!!!"
	} 
	if (!people.inObj(nameA)) {
		people.addName(nameA);
	}
	if (!people.inObj(nameB)) {
		people.addName(nameB);
	}
	
	if (!(nameB in people['index'][nameA]['friends'])){
		people['index'][nameA]['friends'][nameB] = 1;
	} else {
		people['index'][nameA]['friends'][nameB] += 1;
	}

	if (!(nameA in people['index'][nameB]['friends'])){
		people['index'][nameB]['friends'][nameA] = 1;
	} else {
		people['index'][nameB]['friends'][nameA] += 1;
	}

	return people['index'][nameA]['friends'][nameB];
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if ((!people.inObj(nameA)) || (!people.inObj(nameB))) {
		return undefined;
	}
	if (!(nameA in people['index'][nameB]['friends'])){
		return undefined;
	} else {
		return people['index'][nameB]['friends'][nameA];
	}
}

people.friendsOf = function(name) { //returns a string
	if (!people.inObj(name)) {
		return undefined;
	}
	var friendsList = [];

	for (var names in people['index'][name]['friends']) {
		friendsList.push(names);
	}

	friendsList.sort();
	return friendsList.join(' ');
	
}

people.friendsOfFriendsOf = function(name) {
	if (!people.inObj(name)) {
		return undefined;
	}

	var friendsOfFriends = people.friendsOf(name).split(' ');

	for (var key in people['index'][name]['friends']) {
		for (var key2 in people['index'][key]['friends']) {
			if ((friendsOfFriends.indexOf(key2) == -1) && (key2 !== name)){
				friendsOfFriends.push(key2);
			}	
		}
	}

	friendsOfFriends.sort();
	return friendsOfFriends.join(' ');
}

people.inObj = function(name){
	return (name in people.index);
}

people.addName = function(name) {
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

