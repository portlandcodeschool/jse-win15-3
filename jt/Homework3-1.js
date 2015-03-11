/*
1) A Cards Toolkit! [Easy, 10%]

Revisit your playing card functions from homework 2, problem 5b. Repackage them in a Toolkit 
pattern, as methods of a single master object. You may hold that object in a global variable 
named anything you like (it's cardTools in the template), but its name should not appear in the 
definitions of your methods; instead, refer to that object as this. You'll need to change the 
form of your method definitions and the way they call other methods, but their logic and most 
of their code will remain the same.

You may adopt the enclosed template file. Make sure your code still passes all the assertions 
there!

It would be best to modify your own code from Homework 2, but if you didn't solve it before, 
you may adopt the posted solution instead and modify it here.
*/


//a. rankOrder(id)  - above objects must be run for this to work (reset objects into an array?)
//trial 1 - 
//------------------------------------------------------------------------------------

//preliminary - re-create Deck - altered from Homework 2 Deck Object is now Deck Array
var Order = {Ace: 0, 2:4, 3:8, 4:12, 5:16, 6:20, 7:24, 8:28, 9:32, 10:36, Jack:40, Queen:44, King:48}
var Suit = {Hearts:1, Diamonds:2, Spades:3, Clubs:4};
       
    var name;
    var score;
    var pDeck = [];
    var Deck = [];

var createDeck = function() {

    count = 0;
    for(var i in Order) {     //loop through Order object
    name = i;                 //add Order names to name var 
    score = Order[i];         //add Order scores to score var
     for(var b in Suit) {     //take each Order property and loop through the Suits 
        
         name2 = name;         //set new variable for initial name/ re-set when loop returns
        name2 += " of " + b;  //add Suit name to name2 var
        score2 = score;      //set new variable for initial score/re-set when loop returns
        score2+= Suit[b];    //add Suit score to score2 var
         
         pDeck[count]= name2;  //add score2 to the Deck properties - the Deck will be undefined w/out
                               //this (why???)
         count++;
    }
    }
    //The Array puts the Aces in indexes 36-39, so the following moves them to indexes 0-4
    var c = pDeck.slice(36,40);           
    var rDeck= pDeck.slice(0,36).concat(pDeck.slice(40));
    Deck = c.concat(rDeck); 
    
    return Deck;           //returns Deck object/array
}


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

//trial 1 - does not have a  'this' operator 
//------------------------------------------------------------------------------------
var cardTools = {};
    cardTools.rank = function(id){
       if (id==0) 
           return 1;
        y = Math.ceil(id/4);
        return y;
        }

    cardTools.rankSuit = function(id){
                 y= id+1;
                if (y<5)
                    return y;
                 else if (y %4==0)
                     return 4;
                return y %4;       
    }


    cardTools.color = function(id) {

        shade = cardTools.rankSuit(id);  //callback to previous function
        if (shade <3) {
            return "red";
        }
        return "black";
    }

    cardTools.nameCard = function(id) {
        //g = createDeck();      // no need to include if already created
        name = Deck[id];
        return name;
        }

    
    cardTools.cardID = function(rank, suit) {
        //b= cardTools.rank(rank1);
        //c= cardTools.rankSuit(suit);
        //return ((b-1)*4)+c;    
        
        return (((rank-1)*4)+suit)-1;    
        }
    
    
//trial 2 FINAL - inclusion of 'this' operator by reconfiguring cardTools into a function
//------------------------------------------------------------------------------------    
var y;
var cardTools = function() {
    this.rank = function(id){
       if (id===0);
           return 1;
        y = Math.ceil(id/4);
        return y;
        };

    this.rankSuit = function(id){
        y= id+1;
        if (y<5)
            return y;
        else if (y %4===0)
            return 4;
        return y %4;       
    };


    this.color = function(id) {
        shade = cardTools.rankSuit(id);  //callback to previous function
        if (shade <3) {
            return "red";
        };
        return "black";
    };

    this.nameCard = function(id) {
        //g = createDeck();      // no need to include if already created
        name = Deck[id];         //get "read only" warning??? on JS Hint
        return name;
        };

    this.cardID = function(rank, suit) {
        //Deck[id]
        //b= cardTools.rank(rank1);
        //c= cardTools.rankSuit(suit);
        //return ((b-1)*4)+c;    
    return (((rank-1)*4)+suit)-1;    
    };    
  
};

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

//test - figuring out grammar
//----------------------------------------------------------------------------------------------
function cardTools () {
this.rank = function() {
    return "ioagi";
}
}

var cardtewls= new cardTools();

//tests with 'this' 
//test 1 - 'this' in a stand alone function
//----------------------------------------------------------------------------------------------
var obj = {};
var makeobj= function (){
    var y = 1;
    this.opera = 1;         //'this' operator exists in a function & stands in for an object name
    this.chambermusic= 0;
    
} 


//tests with 'this'
//test 2 - this works - 'this operator inside a function
//----------------------------------------------------------------------------------------------
var obj = {
   makeobj: function (){
    var y = 1;
    this.opera = 1;         //'this' operator exists in a function & stands in for an object name
    this.chambermusic= 0;
          }    
} 


/*
this.bbb: function(){
    var b-count=0;
    b-count++;
    return b-count;
*/




