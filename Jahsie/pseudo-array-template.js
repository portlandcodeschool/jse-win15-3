/* OLD VERSION (doesn't use "this")
var array = {};  // element properties will be added as needed


array.push = function(item) {  //changes array, returns a number
	if (!array.length) array.length = 0;
	array.length = array.length + 1;
	array[array.length] = item;
	return array.length;
	//should I have counted array.push and array.length in the length property? I decided not to
	//I've got them listed in the wrong order, but other than that I think it works. I believe this is actually simulating shift because this is adding them at the beginning.
};

*/

var array = {};  // element properties will be added as needed

array.push = function(item) {  //changes array, returns a number
	if (!this.length) this.length = 0;
	this.length = this.length + 1;
	this[this.length] = item;
	return array.length;
	//should I have counted array.push and array.length in the length property? I decided not to
	//I've got them listed in the wrong order, but other than that I think it works. I believe this is actually simulating shift because this is adding them at the beginning.
};

array.push(6);
array.push('banana"');

array.pop = function(/*...*/) { //changes array, returns ??
	this.length = this.length - 1;
	if (this.length < 0) this.length = 0;
}

array.push(6);
array.push('banana"');

array.join = function(/*...*/) { //returns a string
	for (key in array) console.log(key);
}

array.push(6);
array.push('banana"');

for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}


