from collections.abc import Iterator, Iterable


class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def __repr__(self):
        return '<%s of %s>' % (self.value, self.suit)


class DeckIterator(Iterator):
    def __init__(self, deck):
        self.deck = deck
        self.current_card = 0

    def __next__(self):
        if self.current_card >= len(self.deck):
            raise StopIteration()
        card = self.deck[self.current_card]
        self.current_card += 1

        return f"{card} + {self.current_card} "


class Deck(Iterable):
    suits = 'hearts diamonds spades clubs'.split()
    values = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cards = [
            Card(value, suit)
            for suit in self.suits
            for value in self.values
        ]

    def __len__(self):
        return len(self._cards)

    def __iter__(self):
        return DeckIterator(self._cards)


deck_printer = Deck()

for card in deck_printer:
    print(card)
