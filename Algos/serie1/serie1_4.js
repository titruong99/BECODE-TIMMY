// const detectWord=(word)=>{
//     let hiddenWord="";
//     for(let i=0;i<word.length;i++){
//         hiddenWord+=(word[i]==word[i].toLowerCase())?word[i]:"";
//     }
//     return hiddenWord;
// }

const detectWord=word=>word.split("").filter(elem=>elem==elem.toLowerCase()).join("");

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));