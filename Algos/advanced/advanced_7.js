const fibonacci=n=>{
    let arr=getStartingArray(n);
    for(let i=2;i<n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
};

const getStartingArray=n=>{
    let arr=[];
    switch(n){
        case 0:
            break;
        case 1:
            arr.push(1);
            break;
        default:
            arr.push(1,1);
            break;
    }
    return arr;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(9));
console.log(fibonacci(20));
console.log(fibonacci(40));