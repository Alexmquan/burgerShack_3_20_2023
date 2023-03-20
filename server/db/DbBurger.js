export class Burger {
  constructor(data) {
    this.burgerId = data.burgerId
    this.bun = data.bun
    this.patty = data.patty
    this.lettuce = data.lettuce
    this.sauce = data.sauce
    this.tomato = data.tomato
    this.pickles = data.pickles
  }
}

class DbBurger {
  burgers = [
    new Burger({
      burgerId: 1,
      bun: "sesame seed",
      patty: "mushroom",
      lettuce: true,
      sauce: 'ketchup',
      tomato: true,
      pickles: true
    }),

    new Burger({
      burgerId: 2,
      bun: "plain",
      patty: "beef",
      lettuce: true,
      sauce: 'mayo',
      tomato: true,
      pickles: false
    }),

    new Burger({
      burgerId: 3,
      bun: "wheat",
      patty: "chicken",
      lettuce: false,
      sauce: 'ketchup',
      tomato: false,
      pickles: true
    }),

    new Burger({
      burgerId: 4,
      bun: "sesame seed",
      patty: "beef",
      lettuce: true,
      sauce: 'mustard',
      tomato: false,
      pickles: false
    }),

    new Burger({
      burgerId: 5,
      bun: "wheat",
      patty: "mushroom",
      lettuce: true,
      sauce: 'mayo',
      tomato: true,
      pickles: true
    }),

    new Burger({
      burgerId: 6,
      bun: "plain",
      patty: "beef",
      lettuce: false,
      sauce: 'ketchup',
      tomato: true,
      pickles: true
    }),
  ]
}
export const dbBurger = new DbBurger()