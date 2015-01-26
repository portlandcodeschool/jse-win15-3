
var people = {};
people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { //  should accept two names, update people, and return the total number of times those two have met, including this new meeting. If either person isn't yet represented in people, add them. Then increment a count of the meetings between them. Assume that the order of arguments doesn't matter (i.e. meet(A,B) is the same as meet(B,A)), and that meeting oneself (A==B) has no effect.
	//...
	if (nameA != nameB) {
		if (!this.exists(nameA)) { this.create(nameA); }
		if (!this.exists(nameB)) { this.create(nameB); }

		if (!this.index[nameA]['friends'][nameB]) { //Only checking nameA because ideally, insertions will always be symmetric
			this.index[nameA]['friends'][nameB] = 1;
			this.index[nameB]['friends'][nameA] = 1;
		} else { 
			this.index[nameA]['friends'][nameB]++; 
			this.index[nameB]['friends'][nameA]++;
		}
		return this.index[nameA]['friends'][nameB];
	} else {
		return 0;
	}
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if (this.exists(nameA) && this.exists(nameB) && this.index[nameA]['friends'][nameB]){
		return this.index[nameA]['friends'][nameB];
	} else {
		return 0;
	}
}

people.friendsOf = function(name) { //returns a string
	//...
	if (this.exists(name)) {
		var arr = Object.keys(this.index[name]['friends']);
		arr.sort();
		return arr.join(', ');
	} else  {
		return undefined;
	}
}

people.friendsOfFriendsOf = function(name) {

	
}

people.create = function(name) { this.index[name] = {name: name, friends: {}}; }
people.exists = function(name) { return (name in this.index); }

