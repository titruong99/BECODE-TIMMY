function throwDice(faces,times){
    for(let i=0;i<times;i++){
        console.log("Dice "+(i+1)+": "+Math.ceil(Math.random()*faces));
    }
}

throwDice(10,100);