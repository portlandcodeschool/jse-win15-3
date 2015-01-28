//Intesection problem

function intersection (a,b) {
    var obj = {};
    var lengthA = Object.keys(a).length,
        lengthB = Object.keys(b).length;

    var shortObj = (lengthA < lengthB)? a : b;
    var longObj = (lengthA < lengthB)? b : a;

    for (var key in shortObj) {
         if(key in longObj) {
             obj[key] = (a[key] && b[key]);  
         }
    }  
    return obj;
};//end intersection         

 
        
    
    



