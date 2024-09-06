const rollDie = function (max) {
    const roll = Math.floor(Math.random() * max + 1);
    console.log(roll);
  };

const callFunction=(max,times)=>{
    for(let i=0;i<times;i++){
        rollDie(max);
    };
}
callFunction(6,2);