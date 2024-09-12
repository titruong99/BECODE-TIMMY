// With method contains
// const sevenBoom=(array)=>{
//     return array.includes(7)?"Boom!":"There is no 7 in the array";
// }

// With help of findIndex
// const sevenBoom=(array)=>{
//     let val=array.findIndex(element=>element==7);
//     return val!=-1?"Boom!":"There is no 7 in the array";
// }

const sevenBoom=(array)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]==7){
            return "Boom!";
        }
    }
    return "There is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));