const getTotalPrice=(array)=>{
    let total=0;
    array.forEach(element => {
        total+=element.quantity*element.price;
    });
    return parseFloat(total.toFixed(2));
}

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]));
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]));
console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]));

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]));

console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ]));