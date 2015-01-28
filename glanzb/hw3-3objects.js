**3)  Object Comparison** _[Moderate, 30%]_

**a)**
Write a function `copy(obj)`, which duplicates an object (not just copying a reference to it).  You only need a _shallow_ copy, duplicating only the top level of properties.  That is, if `obj` contains another object _inner_, the duplicate may share a reference to _inner_ rather than copying all of _inner_ too.

var obj = {a:1, b:2};
 
function copy(obj) {
  var objCopy = {};
  for (var key in obj) {            
      objCopy[key] = obj[key];
      return objCopy;
  }
};

                        
                            
Write another function to compare two objects:
`equal(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties with the same values.  You only need _shallow_ equality: if `objA` and `objB` each have a property _inner_ referring to an object, check only that both _inner_ objects are identical (references to the same object); don't try to compare their properties.
Note that two empty objects should be considered equal (by this function, not by the `==` operator).

// check both key and value 
// (key in ObjB)
// value at key ObjA[key]


function equal(objA,objB){
  if (Object.keys(objA).length !== Object.keys(objB).length){
      return false; // if false, stops the function
     } 
  for (var key in ObjA)
    if (ObjA[key] !== ObjB[key]) {  // check if a's value at key 
        return false;
       } 
    for (var key in ObjA)
        if (!(key in B)){
         return false;      
         } else {
         return true;
         }  
   }           
or 

function equal(objA,objB){
  if (Object.keys(objA).length !== Object.keys(objB).length){
      return false; // if false, stops the function
     } 
  for (var key in ObjA)
    if (ObjA[key] !== ObjB[key]) || (!(key in ObjB)){
         return false;      
    } else {
        return true;
       }  
   }    

Write a third function:
`similar(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties, regardless of their values.
   /* 
   see if a length = B length 
   if not, return false --> stops the function if it returns something, noo need for else
   if yes, loop around all keys of A 
      -> Object.keys(a). --> gives you the array, get the length of it, can be in a separate variable to make code clean
   ask if hey are the same as B's
    no -> false
    yes -> true
 */

       function similar(objA,objB) {
         if (Object.keys(objA).length !== Object.keys(objB).length){
           return false; // if false, stops the function
         } 
         for (var key in ObjA)
             if (!(key in B)){ //it is not in B
               return false;  // stops the loop
             } else {
               return true;
             }
        }
    
      

**b)**
We can interpret objects as _sets_ of properties, and merge those sets in various ways.  Let's define three such merges:

*Union*: The union of objects A,B is a new object which contains all the properties found in either A or B.  If a property is found in both, the merged property gets the shared key and the value `(A[key] || B[key])`.
For example: the union of `{a:1,b:0}` and `{a:0,c:0}` is `{a:1,b:0,c:0}`.


var objA = {a:1, b:2};
var objB = {a:0, c:0}; 

// function copy(obj) {
//   var objCopy = {};
//   for (var key in obj) {            
//       objCopy[key] = obj[key];
//       return objCopy;
//   }
// };

function union(objA,objB) {
    var union = copy(objA);  // include all of objA, merged with...
    for (var key in objB) {  // ...all of objB
        union[key] = (union[key] || objB[key]);
    }
    return union;
}




*Intersection*: The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  The value of each intersecting property is `(A[key] && B[key])`.
For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.


// intersection

function intersection(a, b){

  var obj = {}; //make result object
  var lengthA = Object.keys(a).length, //find shorther  obj A, B
      lengthB = Object.keys(b).length);
  // var shortObj = (lengthA < lengthB)? a : b; 
  // if  a is shorter, use a; else use b  
  var shortObj, longObj; // undefined, will be defined later  
  if (lengthA < lengthB) {
     shortObj = a;
     longObj = b;
     } else {
     shortObj = b;
     longObj = a;
    }
  for  (var key in shortObj) { //loop over shorter's key  
    if (key in longObj) {// if key is  in both of them
        obj[key] = (a[key] && b[key]);            
        }   // else ignore
    }
    retrurn obj;
};


*Subtraction*: The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  Note that this merge is usually not symmetric: _A minus B_ doesn't equal _B minus A_ (except in one case, which you should identify!)
For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.

// dan's solution

var objA = {a:1,b:0};
var objB = {a:0,c:0};
  
function difference(objA,objB) {
    var diff = copy(objA);
    for (var key in objB) {
        delete diff[key];
    }
    return diff;
}




Using those definitions, implement a function for each:

* `union(objA,objB)`

* `intersect(objA,objB)`

* `subtract(objA,objB)`

Each function should return a new object, or _undefined_ if either of their arguments is not an object.

**c)**
Write three sample assertions to test each of your three merging functions (9 total).
Remember that when comparing your results to the expected results, you'll need to see if objects are equal() but not identical.


**d)**
Finally: even if your functions implement perfectly the definitions above, 
intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always be true, but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain!

Because the order of the object counts, the functions will take the the first value of a key that satisfies the && and || operators.
  
---
