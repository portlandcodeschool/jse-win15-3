/*
4) Social network! [40% total]

Assume a world in which no two people have the same name. Create an object people whose 
purpose is to remember everyone ever mentioned and the relationships between them.

a) [Moderate, 25%]

Write three methods for people:

    people.meet(nameA,nameB) should accept two names, update people, and return the total 
    number of times those two have met, including this new meeting. If either person isn't 
    yet represented in people, add them. Then increment a count of the meetings between them. 
    Assume that the order of arguments doesn't matter (i.e. meet(A,B) is the same as meet(B,A)),
    and that meeting oneself (A==B) has no effect.
//-------------------------------------------------------------------------------------------
*/

var people = {};
var peopleKeys = Object.keys(people);
var peepLength = peopleKeys.length;
var count = 0;
var meetings = {1:0};

people.meet = function (nameA,nameB) {
  
    if (!(nameA in this)) {
      this[nameA] = nameA;
    }
    
  if (!(nameB in this)) {
      this[nameB] = nameB;
    }

  meeting.countMeets();
  
  
  count++;
return this, count, meetings[nameA+nameB] =1;  
}

  meetings.countMeets =function(nameA,nameB){  
  
    newName1 = combineNames(nameA,nameB);       //function call - defined below              
  
    var meetKeys = nameA+nameB;       
    //for (i in meetings) {
      if (!(nameA+nameB)in meetings)
        meetings[(nameA+nameB)] ==Number(1);
      else{
        //meetings[1]=1;
        meetings[meetKeys]+=1; //returning NaN for this? - tried diff versions    
      }
    return meetings[meetKeys], newName1;
  }
 
  function combineNames (nameA,nameb){
  arr = [nameA,nameb];
  arr.sort();
  newName = arr.join(", ");
  return newName;
  }
  
  

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

/*
people.haveMet(nameA,nameB) should return a number greater than 0 if those people have met, 
and some falseish value if they haven't or don't exist.
*/

  people.haveMet = function(nameA,nameB) {
    newName2 = combineNames(nameA,nameb); // function call
    
    if ((newName2)in meetings && meetings[(newName2)]>0)
      return true;
  }
  else 
    return false;
//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
/*
people.friendsOf(name) should return a string listing the names of all people whom name has 
met at least once (or undefined if name doesn't exist). List the names in alphabetical order, and make sure each name appears only once.
*/
var friends = {trr:1, sig: 0, ogja:4, ee:9};   //have to go back & create fn to add names of meetings to each persons' friends object
var friendsArr = [];
var count = 0;


people.friendsOf = function (name) {

  //insert function to call friends obj of name
  
for (i in friends) {    //adds keys from obj to array
  friendsArr[count] = i;  
  count++;
}
 
  friendsArr.sort();
  friendsArr.join(", ");
  return friendsArr;  
}
/*
Exception: missing ; before statement
@Scratchpad/13:1
*/
//-------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
/*
You may use the enclosed template file to get started.

Hint: the people object should contain an index of all people, linking each name to an 
individual object for that person. Each such person-object should have two properties:

    name is a string for that person's name. (This redundant copy of the name isn't necessary 
    for the solution, but it may help you debug.)

    friends is another index object, unique to each person, with multiple keys (one for each 
    friend that person has met), each with a numeric value. Because meetings are symmetric 
    (each person meets the other), each number is duplicated in a corresponding property in
    the friend's index; make sure you update both copies of the number during a meeting.
*/
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

/*
Here is a diagram showing the data structure after people is fully initialized but before
any method calls:
//-------------------------------------------------------------------------------------------

Here is the data structure just after the first method call people.meet('Matt','Tom'):
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

b) [Difficult, 15%]

Write another method people.friendsOfFriendsOf(name) which returns a string listing, in 
alphabetical order, all the names of people within two degrees of separation from name: they
've met either name or at least one of name's friends. Your list may include name itself but
no duplicates: any person should be listed only once regardless of the number of connections
with name.

(Hint: the union of sets includes no duplicates! Perhaps you could recycle code from 
somewhere?)

*/
var newObj = {};
var count = 0;
people.friendsOfFriendsOf(name){
  
  for (i in friends){
     newObj(count) = i.friends;
     secondDegFriends = xxx.union(name.friends,(newObj(count)));  
  }
  
  secondDegFriends.sort();
  return secondDegFriends
}