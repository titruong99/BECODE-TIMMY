// const reverseWord=str=>{
//     let array=str.split(" ");
//     for(let i=0;i<array.length;i++){
//         array[i]=array[i].split("").reverse().join("");
//     }
//     return array.join(" ");
// }

const reverseWord=str=>str.split(" ").map(elem=>elem.split("").reverse().join("")).join(" ");

console.log(reverseWord("This is a string of words"));
console.log(reverseWord("Yo I am Timmy from BeCode"));
console.log(reverseWord("Anime is my passion"));