//3a.01 
var objA = {a:1,b:0}
var objB = {};

function copy(objA){
	
	for ( var key in objA){
		objB[key] = objA[key];
	};
  
  return objB
  
};

console.log(copy(objA));
console.log(copy(objB));

//3a.02

function equal(objA,objB)	{	  
	objB = objA;
  if (objB == objA)	{
		return true
	}
}

equal()

//3a.03 SIMILAR

var objA = {a:1, b:2, c:3}
var objB = {a:0, b:1, d:2};

function similar(objA,objB){
if (Object.keys(objA).length !== Object.keys(objB).length)	{
	return "false"
}
for(var key in objA)	{
	if(!(key in objB))	{
		return "false"
		}
	if(objA[key] !== objB[key])	{
		return "false"
		}
	else	{
		return "true"
	}
}  
}
similar(objA,objB);


//3b.01 UNION
var ojb = {};
var objA = {a:1, b:2, c:3, d:5}
var objB = {a:0, b:1, d:2};

function union(objA,objB){
	
	if (Object.keys(objA).length < Object.keys(objB).length){
		for(var key in objB)	{
			if(!(key in objA))	{
				ojb[key] = objB[key];
			}
			else{				
        		ojb[key] = (objB[key] || objA[key]);
			}
		}
	}
	
	if (Object.keys(objA).length >= Object.keys(objB).length){
		for(var key in objA)	{
			if(!(key in objB))	{
        		ojb[key] = objA[key];				
			}
      else{
				ojb[key] = (objA[key] || objB[key]);
			}
		}
	}
	return ojb
}
union(objA,objB);

//3b.02  INTERSECTION
var ojb = {};
var objA = {a:1, b:2, c:3, d:5}
var objB = {a:0, b:1, d:2};

function intersect(objA,objB){
	
	if (Object.keys(objA).length < Object.keys(objB).length){
		for(var key in objA)	{
			if(key in objB)	{
				ojb[key] = (objA[key] && objB[key]);
			}
		}
	}
	
	if (Object.keys(objA).length >= Object.keys(objB).length){
		for(var key in objB)	{
			if(key in objA)	{
				ojb[key] = (objB[key] && objA[key]);
			}
		}
	}
	return ojb
}
intersect(objA,objB);

//3b.03  SUBTRACTION

var ojb = {};
var objA = {a:1, b:2, c:3, d:5}
var objB = {a:0, b:1, d:2, e:9, g:5};

function subtract(objA,objB){
	
	if (Object.keys(objA).length <= Object.keys(objB).length){
		for(var key in objB)	{
			if(!(key in objA))	{
				ojb[key] = objB[key];
			}
		}
	}
	
	if (Object.keys(objA).length >= Object.keys(objB).length){
		for(var key in objA)	{
			if(!(key in objB))	{
        		ojb[key] = objA[key];				
			}
		}
	}
	return ojb
}

subtract(objA,objB)
