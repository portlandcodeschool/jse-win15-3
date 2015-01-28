function copy(obj) {
a = obj;
    var b = {};
    for (var key in a) {
        b[key] = a[key];
    }
    return (b,a);
};

var objectA = {a:1, b:2, c:4};
var objectB = {a:1, b:3, c:5};

function equal(objA, ojbB) {
    objB = objA;
    if (objB == objA) {
        return true;
    }
    
};

/*function similar(objA, objB) {
    var z = Object.keys(objB);
    var x = Object.keys(objB);
    
    if (z.toString() == x.toString(){
        return true;
    } else {
        return false;
    }

function getKeys(x) {
    return Object.keys(x);
}; */



function lengthCompare(ojbA, objB) {
    var lengthCheckA = Object.length(ojbA);
    var lengthCheckB = Object.length(objB);
    
    if(lengthCheckA == lengthCheckB) {
        return false
    } else {
        return true;
    
    }
    
    return lengthCompare;

};



//class work 
/* Psuedo coding 

See if same length?
Y? N? ---> if no return false

 ---> if yes grab each key from A 
 ask wether key in B
 Y? N? 
 
 ---> if no return false
 
 ---> if yes return to loop
 
 
 */

function similar(){
    
    if (objectA.keys(objectA).length !== objectB.keys(objectB).length) {
        return false;
    } else {
         for (!(objectA.key in objectA)) {
             if() {
         
                    } else {

                      } //Ends else 
        }//Ends for
              
    }//Ends else number 1
};//Ends similar  
                      
//Loop over each key of a...
//if (key is not in b) i'm done 
//else keep looping
    
              


//Dan code
if(object.keys(a).length !== Object.keys(b).length) {
         return false;
         }
        
for (var key in a) {
        if(! (key in b)) {
            return false;
        }
}
        
for (a[key] !== b[key]) {
        return false;
    }
    
if (!(key in b) || (a[key] !== b) {       
    return false;
}        
   
return true;        


    
//Intersection
/*

make a result object

find shorter obj of A,B

loop ove shorter's keys... {
    if key is NOT in both then
        ignore it
    else 
        include in result with value (A[key] && B[key]))      
}

*/
    
var obj = {};
var lengthA = Object.keys(a).length,
    lengthB = Object.keys(b).length;

var shorterB = (lengthA < lengthB)? a : b;
        
    if (lengthA < lengthB) {
        //ignore it
    } else {
    }:        
        

function intersection (a,b) {
    //make result obj
    var obj = {};
    
    //find shorter obj A,B
    var lengthA = Object.keys(a).length,
        lengthB = Object.keys(b).length;
    
    if (lengthA < lengthB) {
        //use A as shorter:
        
        //loop over shorters keys....
        for (var key in a) {
            //if key is in both then ---> if key ALSO in B
            if (key in b) {
            //if in result with value (A[key] && B[key])
            obj[key] = (a[key] && b[key]);    
            
            }//End if
                
                
        }
        
}//Ends if
    

}//End Function Intersection    
        
    
    



