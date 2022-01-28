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
  $("#qButton").click(function(event) {
    event.preventDefault();
    const inputQuantity = $("#quantity").val();
    $("#pizzaForm").hide();
    $("#pizzaForm2").hide();
    $("#pizzaForm3").hide();
    $("#qForm").hide();
    $(".s1").hide();
    $(".s2").hide();
    $(".s3").hide();
    $("#mainForm").show();
    if (inputQuantity === "1") {
      $("#pizzaForm").show();
      $(".s1").show();
    }
    else if (inputQuantity === "2") {
      $("#pizzaForm").show();
      $("#pizzaForm2").show();
      $(".s2").show();
    }
    else if (inputQuantity === "3") {
      $("#pizzaForm").show();
      $("#pizzaForm2").show();
      $("#pizzaForm3").show();
      $(".s3").show();
    }
  })
  $("form").submit(function(event) {
    event.preventDefault();
    $("#qForm").hide();
    $("#mainForm").hide();
    $("#price").show();
    const inputQuantity = $("#quantity").val();
    const inputSize = $("#size").val();
    const inputSize2 = $("#size2").val();
    const inputSize3 = $("#size3").val();
    const inputToppings = $("#toppings").val();
    const inputToppings2 = $("#toppings2").val();
    const inputToppings3 = $("#toppings3").val();
    const pizza1 = new Pizza(inputSize, inputToppings)
    const pizza2 = new Pizza(inputSize2, inputToppings2)
    const pizza3 = new Pizza(inputSize3, inputToppings3)
    pizza1.priceOfSize();
    pizza1.priceOfToppings();
    pizza2.priceOfSize();
    pizza2.priceOfToppings();
    pizza3.priceOfSize();
    pizza3.priceOfToppings();
    if (inputQuantity === "1") {
      $("#output").text(pizza1.price);
    }
    else if (inputQuantity === "2") {
      $("#output").text(pizza1.price + pizza2.price);
    }
    else if (inputQuantity === "3") {
      $("#output").text(pizza1.price + pizza2.price + pizza3.price);
    }
  })
  $("#startover").click(function(event) {
    event.preventDefault();
    $("#price").hide();
    $("#qForm").show();
  })
  $("#checkout").click(function(event) {
    event.preventDefault();
    $("#price").hide();
    $("#checkoutForm").show();
  })
})
