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

