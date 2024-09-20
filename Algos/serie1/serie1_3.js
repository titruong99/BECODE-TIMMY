// const minMax=(array)=>{
//     let min=array[0];
//     let max=array[0];
//     if(array.length>1){
//         for(let i=0;i<array.length;i++){
//             min=array[i]<min?array[i]:min;
//             max=array[i]>max?array[i]:max;
//         }
//     }
//     return [min,max];
// }

const minMax=(array)=>[Math.min(...array),Math.max(...array)];

console.log(minMax([1,2,3,4,5]));
console.log(minMax([2334454,5]));
console.log(minMax([1]));