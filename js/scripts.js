// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.priceOfSize = function() {
  if (this.size === "large") {
    return this.price += 10;
  }
  else if (this.size === "medium") {
    return this.price += 5;
  }
  return this.price;
}

Pizza.prototype.priceOfToppings = function() {
  if (this.toppings === "pepperoni") {
    return this.price += 1;
  }
  else if (this.toppings === "pepperoni and pineapple") {
    return this.price += 2;
  }
}



// const pizza1 = new Pizza("small", "pepperoni");