# Pizza Parlor

[Github Pages Link](https://rileyshimp.github.io/pizza-parlor/)

#### [Riley Shimp](https://www.github.com/rileyshimp)

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* JQuery

## Description
This is a page for a pizza parlor! Select the size and toppings you want, and it will display the cost of your pizza!

## Setup/Installation Requirements

Open this [Github Pages Link](https://rileyshimp.github.io/pizza-parlor/) in your browser.

or follow the instructions below..

### Step 1
Clone the repository:
``` 
$ git clone https://github.com/RileyShimp/pizza-parlor.git 
```
### Step 2
Navigate to the `pizza-parlor` directory on your computer.
### Step 3
Open `index.html` in your preferred browser

## Tests:

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

Describe: priceOfToppings()

Test: "It should return a price based on the toppings of Pizza"
Code: 
const pizza1 = new Pizza("small", "pepperoni");
pizza1.priceOfSize();
Expected Output: 11

Test: "It should add 1 to price for pepperoni"
Code: 
const pizza1 = new Pizza("small", "pepperoni");
pizza1.priceOfSize();
Expected Output: 11

Test: "It should add 2 to price for pepperoni and pineapple"
Code: 
const pizza1 = new Pizza("small", "pepperoni");
pizza1.priceOfSize();
Expected Output: 12

## Known Bugs

* none

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 01/07/2022 Riley Shimp