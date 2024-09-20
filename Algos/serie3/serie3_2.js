// const reverseOdd=(str)=>{
//     let arr=str.split(" ");
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i].length%2==0?arr[i]:arr[i].split("").reverse().join("");
//     }
//     return arr.join(" ");
// };

const reverseOdd=str=>{
    let array=str.split(" ");
    array=array.map(elem=>
        elem.length%2==0?elem:elem.split("").reverse().join(""));
    return array;
}

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
console.log(reverseOdd("This is a test for the words with even or odd length"));