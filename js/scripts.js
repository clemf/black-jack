var Deck = {
  cards: [],

  shuffle: function() {

    var Card = {
      number: 0,
      suit: ""
    }

    var suits = ["hearts", "spades", "diamonds", "clubs"];
    var genDeck = [];

    suits.forEach(function(suit) {
      for(var i = 0; i < 13; i++) {
        var cardGen = Object.create(Card);
        cardGen.number = i + 1;
        cardGen.suit = suit;

        genDeck.push(cardGen);
      }
    });
    this.cards = genDeck;

  }

};
