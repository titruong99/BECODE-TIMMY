let body=document.querySelector("body");

const changeColor=(color)=>{
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() * 4000) + 500;
        setTimeout(()=>{
            if(delay<4000){
                body.style.backgroundColor=color;
                resolve(`background changed into ${color} !`);
            }else{
                reject("Error ! Color not changed!");
            }
        },delay);
    });
}

//code sans delay qui fonctionne mais ne fait pas ce qu'on fait parce qu'il affiche à chaque fois 
// directement la dernière couleur affichée

// const changeColor=(color)=>{
//     return new Promise((resolve,reject)=>{
//         const delay = Math.floor(Math.random() * 4000) + 500;
//         if(delay<4000){
//             body.style.backgroundColor=color;
//             resolve(`background changed into ${color} !`);
//         }else{
//             reject("Error ! Color not changed!");
//         }
//     });
// }

changeColor("blue")
.then((data)=>{
    console.log(data);
    return changeColor("yellow");
})
.then((data)=>{
    console.log(data);
    return changeColor("red");
})
.then((data)=>{
    console.log(data);
    return changeColor("cyan");
})
.then((data)=>{
    console.log(data);
    return changeColor("violet");
})
.then((data)=>{
    console.log(data);
    return changeColor("green");
})
.then((data)=>{
    console.log(data);
    return changeColor("purple");
})
.catch((error)=>{
    console.log(error);
})