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
	if(Object.keys(objA).length !== Object.keys(objB).length){
		return false;
	}
	for(var key in objA) {
		if (!(key in objB)) {
			return false;
		} else {
			return true;
			}
		}
	
};

/* Psuedo Code for function similar
see if the two objects are the same length
	if yes continue
	if no return false
loop grab each key in object obj A 
ask whether the key is also in B 
	if no return false
	if yes keep going
return true
*/

/* less psuedo
 if (Object.keys(objA).length !== Object.keys(objB).length)
 	return false
 loop over each property of A  
 	if !(key in objB)
 		return false
*/
 	
 

/*3b*/


