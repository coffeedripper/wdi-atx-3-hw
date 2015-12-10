//If you run this it will work and set up the deck of cards and do //the logs.
// I messed around with the shuffle function for a while but
//could not quite figure it out.

function deck_o_cards() {

    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    var cardDeck = [];

    for (v = 0, s = 0; s < 4; v++) {

        var card = {
            suit: suits[s],
            value: values[v]
        };


        if (v > 12) {
            s++;
            v = -1;
        } else {
            card.suit = suits[s];
            card.value = values[v];
            cardDeck.push(card);


        }


    }
    console.log(cardDeck);
    console.log("The deck has " + cardDeck.length + " cards.")
    console.log("The top card is the " + cardDeck[0].value + " of " + cardDeck[0].suit + ".");
}
deck_o_cards();
