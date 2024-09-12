const calculator=(nb1,op,nb2)=>{
    let res=0;
    switch(op){
        case "+":
            res=nb1+nb2;
            break;
        case "-":
            res=nb1-nb2;
            break;
        case "*":
            res=nb1*nb2;
            break;
        default:
            res=nb2!=0?nb1/nb2:"Can't divide by 0!";
            break;
    }
    return res;
}

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(2, "-", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(2, "/", 0));