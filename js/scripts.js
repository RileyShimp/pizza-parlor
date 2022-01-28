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
  if (this.toppings === "cheese") {
    return this.price += 1;
  }
  else if (this.toppings === "pepperoni") {
    return this.price += 2;
  }
  else if (this.toppings === "pineapple") {
    return this.price += 3;
  }
  else if (this.toppings === "pepperoni and pineapple") {
    return this.price += 5;
  }
  else if (this.toppings === "meat lovers") {
    return this.price += 10;
  }
}

//UI Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputSize = $("#size").val();
    const inputToppings = $("#toppings").val();
    const pizza1 = new Pizza(inputSize, inputToppings)
    pizza1.priceOfSize();
    pizza1.priceOfToppings();
    $("#output").text(pizza1.price);
  })
})



// const pizza1 = new Pizza("small", "pepperoni");