**1)  A Cards Toolkit!**  _[Easy, 10%]_

```
var cardTools = {

	rank: function(card) {  // 1 ... 13
    if(this.isValid(card,0,51)) {
      return Math.floor(card/4) + 1;
    }
	},

	suit: function(card) {  // 1 ... 4
		if(this.isValid(card,0,51)) {
      return ((card%4) + 1);
    }
	},

	cardID: function(rank,suit) {  // 0 ... 51
		if (this.isValid(rank, 1, 13) &&
    this.isValid(suit, 1, 4)) {
      return (4 * (rank - 1) + (suit - 1));
    }
	},

	color: function(card) {
    var suitColor = this.suit(card);
    return suitColor && ((suitColor < 3) ? "red": "black");
	},

	name: function(card) {
    var rankName = ["", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var suitName = ["", "Hearts", "Diamonds", "Spades", "Clubs"];
    var cardRank = this.rank(card);
    var cardSuit = this.suit(card); // doesn't this check isValid already?
	    if (cardRank && cardSuit) { // so is this necessary?
	    return (rankName[cardRank] + " of " + suitName[cardSuit]);
	    }
	},

    isValid: function(num, low, high) {
    if ((typeof num) !== "number") {
      return NaN;
    }
    if ((num%1) !== 0) {
      return NaN;
    }
    if (num < low || num > high) {
      return NaN;
    }
    return true;
    }
};
   
```

**2)  Testing and Simulating Arrays** _[Moderate, 20%]_

**a)**


**b)** Now that you have a testing suite, implement your own version of Arrays!


---

**3)  Object Comparison** _[Moderate, 30%]_

**a)**

```
function copy(obj) {
  var objCopy = {};
  for (var key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}
```

```
function equal(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
  return false;
  }

  for (var key in objA) {
    if (!(key in objB)) {
      return false;
    }

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

return true;
}

```

```
function similar(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
  return false;
  }

  for (var key in objA) {
  if (!(key in objB)) {
    return false;
  }
}
```
```
//equal(a,b) - short version

function equal(objA, objB) {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
  return false;
  }

  for (var key in objA) {
    if (!(key in objB) || (objA[key] !== objB[key])) { // true equality matters in this case
      return false;
    }
  }

return true;
}
```

**b)**

```
var A = {a:0, b:0, c:0};
var B = {b:0, c:0};

function intersect(objA, objB) {
  var obj = {}
  var lengthA = Object.keys(objA).length;
  var lengthB = Object.keys(objB).length;
  var shortObj = (lengthA < lengthB)? objA : objB;
  var longObj = (lengthA < lengthB)? objB : objA;
  for(var key in shortObj) {
    if (key in longObj) {
      obj[key] = (objA[key] && objB[key]);
    }
  }
return obj;
}
```

//Can not get union to work.

**c)**

**d)**


**4) Social network!** _[40% total]_

Assume a world in which no two people have the same name.
Create an object `people` whose purpose is to remember everyone ever mentioned and the relationships between them.

**a)** _[Moderate, 25%]_




**b)** _[Difficult, 15%]_

