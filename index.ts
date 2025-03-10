class Card {
  public value: number
  constructor(public suit: string, public rank: string) {
    this.value = this.getCardValue();
  }

  private getCardValue() {
    if (this.rank === "A") return 10
    if (this.rank === "K") return 10;
    if (this.rank === "Q") return 10;
    if (this.rank === "J") return 10;
    return parseInt(this.rank);
  }
}

class Deck {
  private cards: Card[] = [];
  constructor() {
    this.cards = this.generateCards();
    this.shuffle();
  }

  private generateCards() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    return suits.flatMap((suit) => ranks.map((rank) => new Card(suit, rank)));
  }

  private shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  private draw() {
    return this.cards.pop();
  }

  private drawCards(n: number) {
     const hand: Card[] = [];
     for(let i = 0; i<n;i++) {
         hand.push(this.draw());
     }
     return hand;
  }
}
