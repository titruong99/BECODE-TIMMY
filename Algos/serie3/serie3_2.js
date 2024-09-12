const reverseOdd=(str)=>{
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].length%2==0?arr[i]:arr[i].split("").reverse().join("");
    }
    return arr.join(" ");
};

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
