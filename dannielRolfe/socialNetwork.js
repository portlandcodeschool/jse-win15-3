//Psuedo Code 
var people = {};

people.meet = function(nameA,nameB) {
        
//if names are not objects make them so?? 
// if falseish (people.index[nameA]) then none yet, so
//make them so
    var objA = people.index[nameA];       
    if(!objA) {        
       objA =  {name:nameA, friends:{} };   
       people.index[nameA] = objA;        
       objA.friends[nameB] = 0;

            //..same thing with other name

            //at this point there is an object for each person and a name in the friends list for other person

    };
     
        
//is nameB in nameA's friend list? --> Always yes
//if Y: increment count for that entry 
        objA.friends[nameB] += 1;
//if N: Make entry in nameA's list for nameB

//is nameA in nameB's friend list
//likewise for other person        
//if Y: increment count for that entry 
//if N: Make entry in nameB's list for nameA
    
//return new count, either one    
    
    
    
    

    }//Ends function meet