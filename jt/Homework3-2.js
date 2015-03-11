/*
2) Testing and Simulating Arrays [Moderate, 20%]

a) Write some code to verify that Arrays behave as advertised. Specifically, write three 
different functions, each testing one method of Arrays:

    
    testPush(array) should verify that array.push(val) adds val to the end of array and 
    returns its new length;

    testPop(array) should verify that array.pop() removes and return the last element of 
    array;

    testJoin(array) should verify that array.join(delim) concatenates all elements of array
    into a single string, with string delim inserted between each element.

Each function should do several tests: adding, removing, or joining values under various
conditions to ensure that array produces the correct outcome. Each outcome may require
multiple assertions to verify. For each function, make sure one test is for how an empty 
array behaves. Any assertion which fails should log a message to the console, but your test
functions don't need return values.

More detailed instructions are in the template file.
*/

var arr = [1,2,3,4,5,6];
//var Alength;
var Blength;
var testPush= function(array) {
  var val = "val";
  //Alength = array.length;
  array.push (val);
  Blength = array.length();
  console.log(array);
  return "Length of modified array = " + Blength;  
};

// test simplified model - this works- x[] changes but b and a remain unchanged
var x = [1];
var b = x;
var a = x.valueOf();
var cc = function c (){
x=[3,4,5];
q=x.pop();
return console.log(x, b, a);
};

//!!!!Cannot get origArr to remain unchanged!!! inspite of it working oin simplified version 
//    above.
//=======================================================================================
var arr = [1,2,3,4,5,6];
var origArr = arr;


var testPop = function(array) {
  var popped = arr.pop ();
  var Blength = arr.length;
  return   console.log("Original =  " + array+popped + "Popped = " + popped+"New array" +arr1+ "Length of modified array = " + Blength);
};  

//trial 3
//=======================================================================================

var arr = [1,2,3,4,5,6];
var origArr = arr;
arr=[9,8,7];


var origArr = [1,2,3,4,5,6];
var arr = [];
var b = console.log(origArr);
var arr = origArr;
var Alength;
var Blength;

var testPop = function(array) {
  array.pop ();
  Blength = array.length;
  return   console.log("Original =  " + origArr + '\n' + "Popped = " + array+ "Length of modified array = " + Blength)

};
//=======================================================================================
//=======================================================================================



// testJoin(array) should verify that array.join(delim) concatenates all elements of array
// into a single string, with string delim inserted between each element.
//=======================================================================================
bbbb = ["the", "for", "by", "to"];
var testJoin = function(delim) {
  newArr = delim.join(" AHA ");
  console.log(delim);
  return newArr;
};


/*

b) Now that you have a testing suite, implement your own version of Arrays!

Create a pseudo-array, an ordinary object which is not an actual Array but behaves (somewhat)
like one. You may use a global variable array to store your pseudo-array. It will have a 
property length, which is initially zero but needs to be adjusted as elements are added or
removed. The elements of array will be stored as properties named by their index numbers. 
So for example, an array representing [5,9] would have three properties named "length",
"0", and "1" whose values are 2, 5, and 9.

For this exercise, you don't need to delete any array elements beyond its length if the 
length shrinks; just ignore them. Setting array.length to 0 is enough to reset it to "empty".

In addition to property length and the element properties, give array three more properties 
pop, push, and join which are functions (i.e. methods) behaving exactly like (and returning 
the same values as) the corresponding methods of real Arrays. When your pop and push methods
modify the array, length should change accordingly.

You may use the enclosed template file to get started.

Hint: Within each method, to refer to your array object, you may use either the global
variable array or the keyword this.
*/

//trial 2 - basics work - pArr obj is sorted, so length ends up last
//need to pop length & unshift it to front of pArr. length function not returning correct value.

  var arr = [];
  var pArr = {};
  
  pArr[0]=5;
  pArr[1]=9;
  pArr.plength= function () {
   var count =0;
    for ( i in pArr){    //note: this 'i' is the string of the key - not a number
      //if (Number(i) >= 0 )
      if (Number(pArr[i]) >=0)
      count++;
      };
   var arrLength = count;
    return arrLength;
  }
  /*
  pArr.index = function(value) {
    for (i in pArr) 
      if (pArr[i] == value)
      var index =i;
    return index;
  }
  */
  
  /*
  //counting method to determine an index given any value
    pArr.index = function (pArr.kee) {
    var count = 0;
    for (i in pArr)
      if (i == kee)
        return count
      else  count++;
  }
*/
  
//-------------------------------------------------------------------------------------------

//testing/prep work  
//-------------------------------------------------------------------------------------------
  var b = {a:1, b:2, c:3}

  b.blend = function (kee) {
    var count=0;
for ( i in b) {
  if (i ==(kee)) 
    return r = console.log(i, count);      
  else
    count++;    
};

  }
  
  
  
// .push  - this works 
//-------------------------------------------------------------------------------------------  
pArr.push = function (item) {  
  pArr[(pArr.length()+1)] = item;
  return console.log(pArr, pArr.length());
}
  /*
  r = pArr.length;  //update length
  //p=console.log(r);
  this[(Number(r)+2)] = item;
  
  return pArr.length;
}
  */
  /*
  for (var i in pArr) {
    if (pArr[i]>pArr[i+1])
      
  } 
  */
//-------------------------------------------------------------------------------------------


// .pop - this works
//-------------------------------------------------------------------------------------------
  pArr.pop = function (){
    //var q = console.log( pArr[(pArr.length())]);
    //var r = pArr[pArr.length()];
    
    //return console.log(pArr[(pArr.length()-1)]);
    var b = pArr.length()-1;
    var c = pArr[b];
    delete pArr[b];
    return console.log (c, pArr);
  };
//-------------------------------------------------------------------------------------------


//trial 1 - join - this prints out the console log statements, but not a combined string
// errors - return statement must be outside of for loop
// errors - d statement not needed (though it was there only to monitor)
//-------------------------------------------------------------------------------------------
  pArr.join = function (delim){
    var list, d;
  
    for (var i in pArr){
      //if (Number(this[i]>=0))
      d = console.log(this[i]);
      list = list+d;
      return list;
    }
  };

//trail 2 join - this works - prints "abcjoin"
//NOTE - list must be initiated as an empty strin ("") - otherwise it prints "undefinedabc..."
//-------------------------------------------------------------------------------------------

var poobah = {a:1, b:2, c:30};
poobah.join = function (delim){
    var list = "";
    //var v;
  
    for (var i in poobah){
      list =list+delim+i;
      //v =console.log(i);
      
    };
return list;
}


//trial 3 - .join - this works
//-------------------------------------------------------------------------------------------
  pArr.join = function (delim){
    var list="";
  
    for (var i in pArr){
      if (Number(this[i]>=0))
        list = list+delim+this[i];
    }
     return list;
  };

/* 
//if (Number(this[i]>=0))
      d = console.log(this[i]);
      list = list+d;
      return list;
    }
  };
*/


//-------------------------------------------------------------------------------------------



  

//trial 1
arr = [];


var createObj = function(pseudo) {
 pseudo = {};
  var b = 0;
pseudo.index= (b-1);
pseudo.length = b;
  
  for (var i in pseudo) {
    b = i;
  };
 
return pseudo;
};


/*
c) Test your pseudo-array implementation using your tests from part a). Your pseudo-array
should be able to pass the same tests of push, pop, and join as a real Array.

*/

// loosely functions - but needs work