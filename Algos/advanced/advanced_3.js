const caesarCipher=(str,nb)=>{
    let arr=str.split("");
    arr=arr.map(letter=>{
        let tempNb=Math.abs(nb);
        for(let i=0;i<Math.abs(nb);i++){
            letter=returnLetter(letter,nb);
        }
        return letter;
    });
    return arr.join("");
}

const returnLetter=(letter,nb)=>{
    if(letter=="z" && nb>0){
        letter="a"
    }else if(letter=="a" && nb<0){
        letter="z"
    }else if(letter=="Z" && nb>0){
        letter="A"
    }else if(letter=="A" && nb<0){
        letter="Z"
    }else{
        let gap=nb>0?1:-1;
        letter=letter!=" "?String.fromCharCode(letter.charCodeAt(0)+gap):letter;
    }
    return letter;
}


console.log(caesarCipher("Zoo keeper", 2));
console.log(caesarCipher("bqq mggrgt", -2));
console.log(caesarCipher("My name is Henrique", 3));
console.log(caesarCipher("coding is fun", -4));