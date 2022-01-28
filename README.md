Describe: Pizza()

Test: "It should return a pizza object with two properties for toppings and size"
Code: const pizza1 = new Pizza("large", "pepperoni");
Expected Output: Pizza {size: 'large', toppings: 'pepperoni'}

Describe: priceOfSize()

Test: "It should return a price based on the size of Pizza"
Code: 
const pizza1 = new Pizza("large", "pepperoni");
pizza1.priceOfSize();
Expected Output: 20

Test: "It should return 20 if the pizza is large"
Code: 
const pizza1 = new Pizza("large", "pepperoni");
pizza1.priceOfSize();
Expected Output: 20

Test: "It should return 15 if the pizza is medium"
Code: 
const pizza1 = new Pizza("medium", "pepperoni");
pizza1.priceOfSize();
Expected Output: 15

Test: "It should return 10 if the pizza is small"
Code: 
const pizza1 = new Pizza("small", "pepperoni");
pizza1.priceOfSize();
Expected Output: 10