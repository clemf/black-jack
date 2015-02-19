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

$(document).ready(function() {
  var gameDeck = Object.create(Deck);
  gameDeck.generate();
  gameDeck.shuffle();
  var dealerHand = Object.create(Hand);


  $("button#hit").click(function() {
    dealerHand.addCard(gameDeck.deal());
    $("#player1").text(dealerHand.cards[0].number + dealerHand.cards[0].suit);
    $("#dealer1").text(dealerHand.cards[1].number + dealerHand.cards[1].suit);
    $("#player2").text(dealerHand.cards[2].number + dealerHand.cards[2].suit);
    $("#dealer2").text(dealerHand.cards[3].number + dealerHand.cards[3].suit);
    $("#player3").text(dealerHand.cards[4].number + dealerHand.cards[4].suit);
    $("#dealer3").text(dealerHand.cards[5].number + dealerHand.cards[5].suit);
    $("#player4").text(dealerHand.cards[6].number + dealerHand.cards[6].suit);
    $("#dealer4").text(dealerHand.cards[7].number + dealerHand.cards[7].suit);
    $("#player5").text(dealerHand.cards[8].number + dealerHand.cards[8].suit);
    $("#dealer5").text(dealerHand.cards[9].number + dealerHand.cards[9].suit);
  });



});
