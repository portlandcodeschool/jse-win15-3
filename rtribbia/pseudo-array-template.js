var array = {length:0};  // element properties will be added as needed

array.pop = function() { //changes array, returns ??
	//...
	var o = this[this.length-1];
	delete this[this.length-1];
	length--;
	return o;
}

array.push = function(val) { //changes array, returns a number
	//...
	array[this.length] = val;
	return ++this.length;
}

array.join = function(delim) { //returns a string
	delim?null:delim=',';
	var outp = '';
	for (var key in this) {
		if ((key % 1) === 0) {

			outp += this[key] + delim;
		}

	}
	return outp.slice(0, -1);

}
