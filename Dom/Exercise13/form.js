const checkUsername=username=>{
    let message="";
    if(username==username.toLowerCase() && username.length>=5 && username.length<=10 ){
        paragraphs[0].innerText=message;
        inputs[0].style.color="green";
        return true;
    }else if(username.length<=5){
        message="Your username must be at least 5 characters";
    }else if(username.length>10){
        message="Your username must be less than 10 characters";
    }else if(username!=username.toLowerCase()){
        message="Your username must be fully in lowercase";
    }
    inputs[0].style.color="red";
    paragraphs[0].innerText=message;
    return false;
};

const checkEmail=email=>{
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(email)){
        inputs[1].style.color="green";
        paragraphs[1].innerText="";
        return true;
    }else{
        inputs[1].style.color="red";
        paragraphs[1].innerText="Invalid email";
        return false;
    }
};

const checkPassword=password=>{
    let message="";
    if(password.length>=8 && password.length<=15){
        inputs[2].style.color="green";
        paragraphs[2].innerText=message;
        return true;
    }else if(password.length<8){
        message="Your password must be at least 8 characters";
    }else if(password.length>15){
        message="Your password must be less than 15 characters";
    }
    inputs[2].style.color="red";
    paragraphs[2].innerText=message;
    return false;
};

const confirmPassword=(password,passwordToConfirm)=>{
    if(password===passwordToConfirm){
        inputs[3].style.color="green";
        paragraphs[3].innerText="";
        return true;
    }else{
        inputs[3].style.color="red";
        paragraphs[3].innerText="Your passwords do not match";
        return false;
    }
};

const checkAllFields=(username,email,password,confirmationPassword)=>checkUsername(username) 
&& checkEmail(email) && checkPassword(password) && confirmPassword(password,confirmationPassword);

let form=document.querySelector(".form");
let inputs=Array.from(document.querySelectorAll("input")).filter(elem=>elem.type!=="submit");
inputs.forEach(el => 
    el.addEventListener("input", ev => {
        el.style.color = "black";
    })
);
let paragraphs=document.querySelectorAll("p")

form.addEventListener("click",event=>{
    if(event.target.type==="submit"){
        event.preventDefault();
        const isUsernameValid = checkUsername(inputs[0].value);
        const isEmailValid = checkEmail(inputs[1].value);
        const isPasswordValid = checkPassword(inputs[2].value);
        const isPasswordConfirmed = confirmPassword(inputs[2].value, inputs[3].value);
        if(isUsernameValid && isEmailValid && isPasswordValid && isPasswordConfirmed){
            inputs.forEach(element => {
                console.log(element.value);
            });
        }
    }
})


