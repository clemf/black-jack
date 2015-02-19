describe('Deck', function() {

  it('creates a deck with 52 cards', function() {
    var testDeck = Object.create(Deck);
    testDeck.generate();
    expect(testDeck.cards.length).to.equal(52);
  });

  it('shuffles a generated deck', function() {
    var testDeck = Object.create(Deck);
    testDeck.generate();
    testDeck.shuffle();
    expect(testDeck.cards[0].number === 1 && testDeck.cards[1].number === 2).to.equal(false);
  });

  it('removes 1 card from the deck', function(){
    var testDeck = Object.create(Deck);
    testDeck.generate();
    testDeck.shuffle();
    testDeck.deal();
    expect(testDeck.cards.length).to.equal(51);
  });
  it('returns 1st card from the deck', function(){
    var testDeck = Object.create(Deck);
    testDeck.generate();
    testDeck.shuffle();
    testDeck.deal();
    var firstCard = testDeck.cards[0];
    expect(testDeck.deal()).to.eql(firstCard);
  });
});

describe('Hand', function() {

  it('adds a card to the hand', function(){
    var testHand = Object.create(Hand);
    var testCard = {number: 1, suit: "hearts"};
    testHand.addCard(testCard);
    expect(testHand.cards).to.eql([testCard]);
  });
  it('')

});
