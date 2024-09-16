const fibonacci=n=>{
    let arr=getStartingArray(n);
    if(n>2){
        let tempvalue=n-2;
        for(i=0;i<tempvalue;i++){
            arr.push(arr[i]+arr[i+1]);
        }
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