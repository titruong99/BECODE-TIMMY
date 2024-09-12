const oddishOrEvenish=(number)=>{
    let total=0;
    let str=number.toString();
    for(let i=0;i<str.length;i++){
        total+=parseInt(str[i]);
    }
    return total%2==0?"Evenish":"Oddish";
}

// algorithm with array: not really necessary
// const oddishOrEvenish=(number)=>{
//     let total=0;
//     let arr=number.toString().split("");
//     arr.forEach(element => {
//         total+=parseInt(element);
//     });
//     console.log(total);
//     return total%2==0?"Evenish":"Oddish";
// }

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));