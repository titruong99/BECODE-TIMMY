function Button({form,changeMessages,activate,show}){

    const isFormComplete=()=>{
        let val=true;
        Object.keys(form).forEach(f=>{
            if(form[f]!==""){
                changeMessages(f,"Success","green");
                switch(f){
                    case "age":
                        val=val && checkAge();
                        break;

                    case "email":
                        val=val && checkEmail();
                        break;

                    case "phone":
                        val=val && checkPhone();
                        break;

                    case "rPassword":
                        val=val && checkPasswords();
                        break;
                }
                
            }else{
                val=val &&false;
                changeMessages(f,"The field is empty","red");
            }
        });
        return val;
    }

    const checkAge=()=>{
        const res=form.age>=18 && form.age<=84;
        if(!res){
            changeMessages("age","You must be between 18 and 84 years old","red");
        }
        return res;
    }

    const checkEmail=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const res=emailRegex.test(form.email);
        if(!res){
            changeMessages("email","It is not an email !","red");
        }
        return res; 
    }

    const checkPhone=()=>{
        const belgianPhoneRegex = /^(\+32|0)\d{8,9}$/;
        const res=belgianPhoneRegex.test(form.phone);
        if(!res){
            changeMessages("phone","It is not a belgian phone number !","red");
        }
        return res;
    }

    const checkPasswords=()=>{
        const res= form.password!=="" && form.rPassword!=="" && form.password===form.rPassword;
        if(!res){
            changeMessages("rPassword","The confirmation password does not match","red");
        }
        return res;
    }

    const checkFields=()=>{
        activate();
        if(isFormComplete()){
            show();
        }
    }

    return(<button className="confirm" onClick={checkFields}>Confirm</button>);
}

export default Button;