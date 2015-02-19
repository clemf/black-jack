var Deck = {
  cards: [],

  generate: function() {
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
  },

  shuffle: function() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  },

  deal: function() {
    return this.cards.shift();
  }

};

var Hand = {
  cards: [],

  addCard: function(card) {
    this.cards.push(card);
  }
}
