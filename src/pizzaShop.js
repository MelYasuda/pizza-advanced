// business logic
export function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(){
  // Loop through toppins array and add the corresponding value (price) of toppings variable
  var toppingTotalPrice = 0;
  this.toppings.forEach(function(topping){
    toppingTotalPrice += toppingsPrices[topping];
  });

  return size[this.size] + toppingTotalPrice;
};

var size = {
  small: 7,
  medium: 9,
  large: 10
};

var toppingsPrices = {
  cheese: 1,
  pepperoni: 1,
  anchovy: 2,
  pineapple: 3
};
