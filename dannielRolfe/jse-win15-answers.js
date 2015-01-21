//1

function rank(id) {
        var result = Math.floor(id/4) + 1;
        return result; 

    }; //This ends function rank
    
    
    
    function suit(id) {
        var result = (id%4) + 1;
        return result;
    }; //This ends function suit
    
	var toolkit = {suitNames: 'undefined', 'Hearts', 'Diamonds', 'Spades', 'Clubs' rankeNames: 'undefined', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'};
    
    function name(id) {
        var rankName = rankNames[rank(id)],
            suitName = suitNames[suit(id)],
            fullName = rankName + " of " + suitName;

        return fullName;

    };//This ends function name    
