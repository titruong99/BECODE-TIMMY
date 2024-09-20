// const sortDrinkByPrice=(array)=>{
//     array.sort((p1,p2)=>{
//         return p1.price-p2.price;
//     });
// }

const sortDrinkByPrice=(array)=>{
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[i].price>array[j].price){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }

        }
    }
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