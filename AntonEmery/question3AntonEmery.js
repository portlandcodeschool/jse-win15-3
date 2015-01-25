/*3a*/

var a = {a:1, b:2};

function copy(obj) {
 a = obj;
 var b = {};
 for (var key in a) {
 	b[key] = a[key];
 }
	return (b.a);
}

var objectA = {a:1, b:2, c:4};
var objectB = {a:1, b:3, c:5};
						

function equal(objA, objB) {

}

function similar(objA, objB) {
	
	
}

// Psuedo Code for function similar
see if the two objects are the same length
	if yes continue
	if no return false
loop grab each key in object obj A 
ask whether the key is also in B 
	if no return false
	if yes keep going
return true

/*3b*/


