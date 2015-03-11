/*

3) Object Comparison [Moderate, 30%]
*/
//-------------------------------------------------------------------------------------------
/*
a.1) Write a function copy(obj), which duplicates an object (not just copying a reference to 
it). You only need a shallow copy, duplicating only the top level of properties. That is, if
obj contains another object inner, the duplicate may share a reference to inner rather than 
copying all of inner too.
*/

var copyObj = {};
var copy = function(obj) {
    
  for (var i in obj){
    copyObj[i] = obj[i];
  }
  return copyObj;
}

//-------------------------------------------------------------------------------------------
/*a.2)
Write another function to compare two objects: equal(objA,objB) should return true only when
objA and objB have exactly the same properties with the same values. You only need shallow 
equality: if objA and objB each have a property inner referring to an object, check only that 
both inner objects are identical (references to the same object); don't try to compare their
properties. Note that two empty objects should be considered equal (by this function, not by
the == operator).
*/

propB=objB.propB;

  var objC={a:1, b:2, c:3};
var objD={a:1, b:2, c:3};

var equal = function(objA,objB) {
  var propertyCount =0;
  var validCount = 0;
  
 // if (objA.length == objB.length) {
  for (var i in objA){
    propertyCount++;
      if (objB[i] && objA[i]==objB[i]) {
        //(objA[i]==objB[i] && objB[i]==objA[i]) {
        //c=Boolean(objB[i]==true);
        //r= (objA[i]==objB[i]);
        ++validCount;
        //console.log(i + ": " + objB[i], +" "+ c + " "+ r + " " + count);
//    for (var c in objB){
  //  if (i==c) && (objA[i]==objB[c])   
      }
    //if (count == objA.length && count == objB.length)
    if (propertyCount==validCount)
    return true;
else return false;
   }
  //}
}
  
/*
Exception: missing } after property list
@Scratchpad/11:3
*/

//trial 2 - using only conditionals
//runs - fails to give "false" on inequal property names
//-------------------------------------------------------------------------------------------
var objC={a:1, b:2, c:3};
var objD={a:1, b:2, q:3};

var equal = function(objA,objB) {
  var arr=[];  
  
  for (var i in objA){
    
    for (var v in objB){
      if (v ==i) { 
        arr.push(objA[i]==objB[v]);
        if (objA[i]!=objB[v])
        return false;   
    }
      }
      }

  console.log(arr);  
  return true;
   }
}
//3.a.2   var equal = function ()  
//trial 3 - this works - it sets a var for counting the number of times the loops pass a set 
// of conditionals & compares that count to the number of keys in the objects being tested.
// - note - this converts obj[i] values to strings in order to handle arrays, objects, etc.
// - note - the array included for monitoring will consider any non-primitive values unequal
// irrespective of whether they are - the function however only compares their Strings. 
//-------------------------------------------------------------------------------------------
var objC={a:1, b:2, c:3, d:[true, 1, "a"]};
var objD={a:1, b:2, c:3, d:[true, 1, "a"]};


var equal = function(objA,objB) {
  var arr=[];  
  var propertyACount =0;
  var propertyBCount =0;
  var validCount = 0;

  for (var i in objA){
    propertyACount++;
  }
  for (var v in objB) {
    propertyBCount++;
  }
  if (propertyACount==propertyBCount) {

    
  for (var i in objA){  //cycle through A keys
        
    for (var v in objB){  //cycle through B keys
      
      if (v ==i) {   //if the keys are the same
      
        if (String(objA[i])==String(objB[v])) {  //and if the Str values of the keys are ==
        arr.push (objA[i]==objB[v]);  //this just serves as a check       
        ++validCount;                 //increment the count of passed tests
        }
    }
      }
      }
  console.log(arr, propertyACount, propertyBCount, validCount);
  if(propertyACount == validCount){
      
    return true;
    }
    else
      return false;
   }
  else
      return false;
}

//-------------------------------------------------------------------------------------------



/*
3.a.3) var similar function()
Write a third function: similar(objA,objB) should return true only when objA and objB have 
exactly the same properties, regardless of their values.
*/

var objC={a:1, b:2, c:3, d:[true, 1, "a"]};
var objD={a:1, b:2, c:3, f:[true, 1, "a"]};


var similar = function(objA,objB) {
  var arr=[];  
  var propertyACount =0;
  var propertyBCount =0;
  var validCount = 0;

  for (var i in objA){
    propertyACount++;
  }
  for (var v in objB) {
    propertyBCount++;
  }
  if (propertyACount==propertyBCount) {

    
  for (var i in objA){  //cycle through A keys
        
    for (var v in objB){  //cycle through B keys
      
      if (v ==i) {   //if the keys are the same
      
        //if (String(objA[i])==String(objB[v])) {  //and if the Str values of the keys are ==
        arr.push (objA[i]==objB[v]);  //this just serves as a check       
        ++validCount;                 //increment the count of passed tests
        //}
    }
      }
      }
  console.log(arr, propertyACount, propertyBCount, validCount);
  if(propertyACount == validCount){
      
    return true;
    }
    else
      return false;
   }
  else
      return false;
}

//-------------------------------------------------------------------------------------------

/*
b) We can interpret objects as sets of properties, and merge those sets in various ways. 
Let's define three such merges:

Union: The union of objects A,B is a new object which contains all the properties found in 
either A or B. If a property is found in both, the merged property gets the shared key and
the value (A[key] || B[key]). For example: the union of {a:1,b:0} and {a:0,c:0} is {a:1,b:0,
c:0}.

Intersection: The intersection of objects A,B is a new object which contains only those 
properties found in BOTH A and B. The value of each intersecting property is 
(A[key] && B[key]). For example, the intersection of {a:1,b:0} and {a:0,c:0} is {a:0}.

Subtraction: The subtraction of B from A, aka "A minus B", is an object which contains all
the properties of A which are NOT in B. Note that this merge is usually not symmetric: A 
minus B doesn't equal B minus A (except in one case, which you should identify!) For example,
{a:1,b:0} minus {a:0,c:0} is {b:0}, and the reverse subtraction is {c:0}.

Using those definitions, implement a function for each:

    union(objA,objB)

    intersect(objA,objB)

    subtract(objA,objB)

Each function should return a new object, or undefined if either of their arguments is not an
object.
*/

//3.b.1  funtion union(objA,objB)
//-------------------------------------------------------------------------------------------
var objC={a:1, b:2, c:3, d:[true, 1, "a"]};
var objD={a:1, b:2, c:3, f:[true, 1, "a"]};


var union = function(objA,objB) {
  var newObj = {};
  for (var i in objA) {
    newObj[i] = objA[i];
  }
    for (var v in newObj) {
     for (var b in objB){
      if (v !=b) {
     newObj[b] = objB[b];
   }
    }
  }
  return newObj;
}
  


//3.b.2  funtion intersection(objA,objB)
//-------------------------------------------------------------------------------------------
var objC={a:1, b:2, c:3, d:[true, 1, "a"]};
var objD={a:1, b:2, c:3, d:[true, 1, "a"]};


var union = function(objA,objB) {
  var newObj = {};

  for (var i in objA) {
    if (i in objB)
      newObj[i] = (objA[i] && objA[i] );
  }     
  return newObj;  
}

//3.b.3  funtionsubtraction(objA,objB)
//-------------------------------------------------------------------------------------------
var objC={a:1, b:2, c:3, d:[true, 1, "a"]};
var objD={a:1, b:2, c:3, f:[true, 1, "a"]};


var subtraction = function(objA,objB) {
  var newObj = {};

  for (var i in objA) {
    if (!(i in objB))
      newObj[i] = objA[i];
  }     
  return newObj;  
}



//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

/*
c) Write three sample assertions to test each of your three merging functions (9 total). 
Remember that when comparing your results to the expected results, you'll need to see if 
objects are equal() but not identical.


//-------------------------------------------------------------------------------------------
d) Finally: even if your functions implement perfectly the definitions above, intersection
and union are still not symmetric. That is, similar(union(A,B),union(B,A)) will always be 
true, but equal(union(A,B),union(B,A)) may not be. Likewise with intersection. Explain!
*/
/*
intersection uses objA and returns the subset of objA keys also within objB (venn Diagram).
It does not test whether that subset is the entirety of objB or not.

Union() puts the entirety of objA & objB keys into a new object. Order of the objects does not
affect the test since all of the keys from each are included. Those keys are the only thing
similar() tests for, so similar() will always return true.

Union() and Intersection are not symmetric in the case of ...?


