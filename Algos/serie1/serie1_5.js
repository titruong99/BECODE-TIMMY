const sortDrinkByPrice=(array)=>{
    array.sort((p1,p2)=>{
        return p1.price-p2.price;
    });
}

let arr=drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
  ];
sortDrinkByPrice(arr);
console.log(arr);