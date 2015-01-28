
var people = { Greg:1, Todd:1, Ondine:1, Tal:1 };

people.index = {}; 	//each property here will be named after a person
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

