//1. See cards2-template.js

//2.A. See array-test-template.js
//B.&C. See pseudo-array-template.js 

//3.A. -----------------------------------------
	function copy(obj) {
		var iso = (typeof obj == 'object');
		var dupe = { };

		if (iso) {
			for (var key in obj) {
				dupe[key] = obj[key];
			}
		} else {
			console.log('obj is not an object type!');

		}
		return dupe;

	}
	
	function equal(objA, objB) {
		var same = true;
		var same_len = Object.keys(objA).length == Object.keys(objB).length;

		if (same_len) {
			for (var key in objA) {
				if (objA[key] != objB[key]) {
					same = false;
				}
			}
		} else { same = false; }

		return same;
	}

	function similar(objA, objB) {
		var same = true;
		var same_len = Object.keys(objA).length == Object.keys(objB).length;

		if (same_len) {
			for (var key in objA) {
				if (Object.keys(objB).indexOf(key) == -1) {
					same = false;
				}
			}
		} else { same = false; }

		return same;

	}

	//3.B. ------------------------
	function union(objA, objB) { 
			var iso = ((typeof objA == 'object') && (typeof objB == 'object'));
			var new_obj = {};
			if (iso) {
				for (var key in objA) {
					(Object.keys(objB).indexOf(key) == -1)?(new_obj[key] = objA[key]):(new_obj[key] = (objA[key] || objB[key]));
				}
				for (var key in objB) {
					if (Object.keys(objA).indexOf(key) == -1) { new_obj[key] = objB[key]; }
				}
				return new_obj;
			} else {
				return undefined;
			}
		}

		function intersection(objA, objB) {
			var iso = ((typeof objA == 'object') && (typeof objB == 'object'));
			var new_obj = {};
			if (iso) {
			for (var key in objA) {
				if (Object.keys(objB).indexOf(key) != -1) { new_obj[key] = (objA[key] && objB[key]); }
				}
				return new_obj;
			} else {
				return undefined;
			}
		}

		function subtract(objA, objB) {//{a:1,b:0} minus {a:0,c:0} is {b:0}
			var iso = ((typeof objA == 'object') && (typeof objB == 'object'));
			var new_obj = {};
			if (iso) {

				for (var key in objA) {
					if (Object.keys(objB).indexOf(key) == -1) { new_obj[key] = objA[key]; }

				}

				return new_obj;
			} else {
				return undefined;
			}
		}

	//3.C. ------------------
	function expectValue(result, expected, attemptStr) {
		if (!equal(result,expected)) {
			console.log(attemptStr+" expected result "+expected+", got "+result);
		}
	}
	var objA = {a:1,b:0};
	var objB = {a:0,c:0};
	var objC = {a: 2, b: 3, c:4 };
	
	//UNION
	expectValue(union(objA,objB), {a:1,b:0,c:0}, 'union(objA,objB)');
	expectValue(union(objB,objA), {a:1,b:0,c:0}, 'union(objB,objA)');
	expectValue(union(objC,objA), {a: 2, b: 3, c:4 }, 'union(objC,objA)');

	//INTERSECTION
	expectValue(intersection(objA,objB), {a:0}, 'intersection(objA,objB)');
	expectValue(intersection(objB,objA), {a:0}, 'intersection(objB,objA)');
	expectValue(intersection(objC,objA), {a: 1, b: 0}, 'intersection(objC,objA)');

	//SUBTRACT
	expectValue(subtract(objA,objB), {b:0}, 'subtract(objA,objB)');
	expectValue(subtract(objB,objA), {c:0}, 'subtract(objB,objA)');
	expectValue(subtract(objC,objA), {c:4}, 'subtract(objC,objA)');

	//3.D.-------------------


	//4. See social-network-template.js