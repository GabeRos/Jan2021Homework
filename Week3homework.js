const pizzaToppings = ["Pepperoni", "ham", "Beef", "Meatballs"];

function greetCustomer() {
  let greeting = `Welcome to Gabe Pizza Palace, our topping are`;
  for (let toppings of pizzaToppings){
    greeting += `${toppings}, `;
  }
console.log(greeting);
}
greetCustomer();

function getPizzaOrder(size, crust, ... toppings ){
  let order = `One ${size} ${crust} crust pizza with `;
  for (let toppings of pizzaToppings){
      order += `${toppings}, `;
  }
  console.log(`{order}.coming up!`);
  return [size, crust, toppings];
}
getPizzaOrder("Large", "Thin Crust", "Pepperoni", )

function preparePizza([orderSize, orderCrust, orderToppings ]){
  console.log("...Cooking Pizza");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
let cookedPizza = preparePizza(customerOrder);

function servePizza;
