// const isSmooth=(str)=>{
//     let answer=true;
//     let arr=str.split(" ");
//     let lastLetterCurrentWord=arr[0].charAt(arr[0].length-1);
//     for(let i=1;i<arr.length;i++){
//         answer=lastLetterCurrentWord==arr[i].charAt(0)?answer && true:answer && false;
//         lastLetterCurrentWord=arr[i].charAt(arr[i].length-1);
//     }
//     return answer;
// };

//better version
const isSmooth=(str)=>{
    let array=str.split(" ");
    return array.every((elem, i) =>
    i === array.length - 1?true:elem[elem.length-1]===array[i + 1][0]);
}



console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats super righteously"));