import { Pizza } from './../src/pizzaShop.js';

describe('Pizza', function() {

  it('should correctly determine if the total price is $9', function() {
    var pizza = new Pizza("small",["cheese", "pepperoni"]);
    expect(pizza.price()).toEqual(9);
  });
});
