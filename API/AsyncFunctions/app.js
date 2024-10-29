let body=document.querySelector("body");

const generateBG=(color,delay)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        body.style.backgroundColor=color; 
        resolve(`Background changed into ${color} !`)
      }
      ,delay)
  });
};

// const generateBG=(color,delay)=>{
//   return new Promise((resolve,reject)=>{
//       if(delay<4000){
//         setTimeout(()=>{
//           body.style.backgroundColor=color;
//           resolve(`Background changed into ${color} !`)
//         }
//         ,delay)
//       }else{
//         reject("Background color not changed !");
//       }
//   });
// };


const changeColor= async()=>{
  try{
    let colorBlue=await generateBG("blue",2000);
    console.log(colorBlue);
    let colorYellow=await generateBG("yellow",2000);
    console.log(colorYellow);
    let colorRed=await generateBG("red",2000);
    console.log(colorRed);
    let colorCyan=await generateBG("cyan",2000);
    console.log(colorCyan);
    let colorViolet=await generateBG("violet",2000);
    console.log(colorViolet);
    let colorGreen=await generateBG("green",2000);
    console.log(colorGreen);
    let colorPurple=await generateBG("purple",2000);
    console.log(colorPurple);
  }catch(e){
    console.log(error);
  }
}

changeColor();