describe('Deck', function() {
  it('creates a deck with 52 cards', function() {
    var testDeck = Object.create(Deck);
    testDeck.shuffle();
    expect(testDeck.cards.length).to.equal(52);
  })
});
