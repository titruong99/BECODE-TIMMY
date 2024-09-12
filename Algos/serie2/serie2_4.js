const arrayOfMultiples=(num,length)=>{
    let array=[];
    for(let i=1;i<=length;i++){
        array.push(num*i);
    }
    return array;
};

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));