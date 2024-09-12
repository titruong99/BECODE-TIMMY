const findBrokenKeys=(str1,str2)=>{
    let array=[];
    for(let i=0;i<str1.length;i++){
        if(str1.charAt(i)!=str2.charAt(i) && !array.includes(str1.charAt(i))){
            array.push(str1.charAt(i));
        }
    }
    return array;
};

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
