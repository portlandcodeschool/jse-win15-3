var array = {length:0,  // element properties will be added as needed

pop: function() { //changes array, returns ??
	//remove last item in the object, return modified length
	delete this[this.length-1];
	this.length = this.length -1;
	return this.length;
},

push: function(x) { //changes array, returns a number
	this[this.length] = x;//...
	this.length = this.length + 1;
	return array.length;
},

join: function(z) { //returns a string
		var answer = '';
		
	for(var i = this.length; i > 0; i--){
			answer = answer + this[i-1] + z;
			}	
	var joined = answer.substring(0, answer.length-1);  //chops off the last character in the string and returns the rest of it
	return joined;
	

},

};

array.push('gilbert');
array.push('gary');
array.push('turbo');