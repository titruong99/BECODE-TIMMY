const fizzBuzz=num=>{
    for(let i=1;i<=num;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

// const fizzBuzz=num=>{
//     for(let i=1;i<=num;i++){
//         let str=(i%3==0?"Fizz":"")+(i%5==0?"Buzz":"")+(i%5!=0 && i%3!=0?i:"");
//         console.log(str);
//     }
// }


fizzBuzz(20);