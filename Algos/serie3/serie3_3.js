const isSmooth=(str)=>{
    let answer=true;
    let arr=str.split(" ");
    let lastLetterCurrentWord=arr[0].charAt(arr[0].length-1);
    for(let i=1;i<arr.length;i++){
        answer=lastLetterCurrentWord==arr[i].charAt(0)?answer && true:answer && false;
        lastLetterCurrentWord=arr[i].charAt(arr[i].length-1);
    }
    return answer;
};

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats super righteously"));