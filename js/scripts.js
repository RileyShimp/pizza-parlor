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


// const pizza1 = new Pizza("large", "pepperoni");