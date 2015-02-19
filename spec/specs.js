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
});
