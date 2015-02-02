
var people = {};

people.index = {}; 	//each property here will be named after a person
					//and hold a reference to an object representing that person.

people.meet = function(nameA,nameB) { // returns a number
    // Check for same, meeting yourself
    if (nameA === nameB) return "You've met another old friend: yourself!";

    // Check for A and B in index, if not add A and B with
    // each other as friends using helper addPeople()
    if (this.index[nameA] === undefined && this.index[nameB] == undefined) {
        this.addPeople(nameA, nameB);
        return 1;
    }

    // Check for A in index, if not add A with
    // friend B with helper addPerson()
	if (this.index[nameA] === undefined) {
        this.addPerson(nameA, nameB);
        return 1;
    }

    // Check for B in index, if not add B with
    // friend A with helper addPerson()
	if (this.index[nameB] === undefined) {
        this.addPerson(nameB, nameA);
        return 1;
    }

    // Both are in index, but have they met before?
    if (this.index[nameA].friends[nameB] === undefined) {
        this.index[nameA].friends[nameB] = 1;
        this.index[nameB].friends[nameA] = 1;
        return 1;
    }

    // Both are in index AND have met before:
    this.index[nameA].friends[nameB] += 1;
    this.index[nameB].friends[nameA] += 1;

    // Return their total meetings:
    return this.index[nameA].friends[nameB];

};

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if (nameA === nameB) return "Error: can't meet yourself!";
    if (this.index[nameA] === undefined ||
        this.index[nameB] === undefined ||
        this.index[nameA].friends[nameB] === undefined) {
        return nameA + " & " + nameB + " have never met.";
    }
    return this.index[nameA].friends[nameB];
};

people.friendsOf = function(name) { //returns a string
    if (this.index[name] === undefined) return undefined;
    var friendsList = [];
    for (var friend in this.index[name].friends) {
        if (friendsList[friend] === undefined) {
            friendsList.push(friend);
        }
    }
    return friendsList.sort().join('\n');
};

people.friendsOfFriendsOf = function(name) {
    var firstDegree = this.friendsOf(name).split('\n');
    for (var i = 0; i < firstDegree.length; i++) {
        var secondDegree = this.friendOf(firstDegree[i]).split('\n');
        for (var f = 0; f < secondDegree.length; f++) {
            if (firstDegree[secondDegree[f]] === undefined) {
                firstDegree.push(secondDegree[f]);
            }
        }
    }
    return firstDegree.sort().join('\n');
};

people.addPeople = function(nameA,nameB) {
    people.index[nameA] = {
        'name': nameA,
        'friends': {}
    };
    people.index[nameB] = {
        'name': nameB,
        'friends': {}
    };
    people.index[nameA].friends[nameB] = 1;
    people.index[nameB].friends[nameA] = 1;
};

people.addPerson = function(nameA,nameB) {
    people.index[nameA] = {
        'name': nameA,
        'friends': {}
    };
    people.index[nameA].friends[nameB] = 1;
    people.index[nameB].friends[nameA] = 1;
};