// const findBrokenKeys=(str1,str2)=>{
//     let array=[];
//     for(let i=0;i<str1.length;i++){
//         if(str1.charAt(i)!=str2.charAt(i) && !array.includes(str1.charAt(i))){
//             array.push(str1.charAt(i));
//         }
//     }
//     return array;
// };

const findBrokenKeys=(str1,str2)=>{
    let arr1=str1.split("");
    let arr2=str2.split("");
    return removeDouble(arr1.filter((elem,i)=>elem!=arr2[i]));
};

const removeDouble=array=>array.filter((elem,i)=>array.indexOf(elem)===i)

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
