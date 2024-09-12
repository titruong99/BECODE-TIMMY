let max=prompt("Enter a max number");
while(isNaN(parseInt(max))){
    alert("Not a number !");
    max=prompt("Enter a max number");
}
let random=Math.ceil(Math.random()*max);
console.log(random);
let nbTries= 1;
let guess=parseInt(prompt("What is your guess?"));
while(guess!==random){
    if(isNaN(guess)){
        alert("Not a number !");
    }else if(guess===0){
        alert("It is between 1 and "+max);
    }else{
        guess<random?alert("Wrong number ! It is higher"):alert("Wrong number ! It is lower");
        nbTries++;
    }
    guess=parseInt(prompt("What is your guess?"));
}

alert("Congratulations! You succeed in "+nbTries+ " try/tries.");