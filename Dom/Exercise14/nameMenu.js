let inputs=document.querySelectorAll("input");
let messages=document.querySelectorAll("p");
let button=document.querySelector("button");

const fieldsAreEmpty=()=>{
    let res=true;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value===""){
            res=false;
            messages[i].innerText="You have to put a name";
        }
    }
    return res;
};

for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("click",e=>{
        messages[i].innerText="";
    })
}

button.addEventListener("click",e=>{
    if(fieldsAreEmpty()){    
        window.location.href = `choice.html?crossPlayer=${inputs[0].value}&circlePlayer=${inputs[1].value}`;
    }
});