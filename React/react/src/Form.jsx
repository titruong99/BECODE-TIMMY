import Title from "./Title"
import Field from "./Field";
import Button from "./Button";
import { useState } from "react";
import Dialog from "./Dialog";

function Form(){

    const [firstSubmission,setFirstSubmission]=useState(false);

    const [showingData,setShowingData]=useState("none");

    const [form,setForm]=useState({
        firstName:"",
        name:"",
        age:"",
        email:"",
        phone:"",
        password:"",
        rPassword:""
    })

    const [messages,setMessages]=useState({
        firstName:"",
        name:"",
        age:"",
        email:"",
        phone:"",
        password:"",
        rPassword:""
    })

    const [colors,setColors]=useState({
        firstName:"black",
        name:"black",
        age:"black",
        email:"black",
        phone:"black",
        password:"black",
        rPassword:"black"
    })

    const checkEmail=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(form.email);
    }

    const checkPhone=()=>{
        const belgianPhoneRegex = /^(\+32|0)\d{8,9}$/;
        return belgianPhoneRegex.test(form.phone);
    }

    const activateDynamicChanges=()=>{
        setFirstSubmission(true);
    }

    const checkNamesField=(field,value)=>{
        switch(field){
            case "firstName":
                value!==""?handleMessages(field,"Success","green"):handleMessages(field,"The field is empty","red");    
                break;
            
            case "name":
                value!==""?handleMessages(field,"Success","green"):handleMessages(field,"The field is empty","red");    
                break;

            case "age":
                value!==""?((value>=18 && value<=84)?handleMessages(field,"Success","green"):handleMessages(field,"You must be between 18 and 84 years old","red")):handleMessages(field,"The field is empty","red");    
                break;

            case "email":
                value!==""?checkEmail()?handleMessages(field,"Success","green"):handleMessages(field,"The email is not valid !","red"):handleMessages(field,"The field is empty","red");
                break;

            case "phone":
                value!==""?checkPhone()?handleMessages(field,"Success","green"):handleMessages(field,"It is not a belgian phone number !","red"):handleMessages(field,"The field is empty","red");
                break;

            case "password":
                value!==""?handleMessages(field,"Success","green"):handleMessages(field,"The field is empty","red");    
                break;

            case "rPassword":
                value!==""?form.password===value?handleMessages(field,"Success","green"):handleMessages(field,"The confirmation password does not match","red"):handleMessages(field,"The field is empty","red");
                break;
        }
    }


    const handleChangeField=(field,value)=>{
        if(firstSubmission){
            checkNamesField(field,value);
        }
        setForm(f=>({...f,[field]:value}));
    }

    const handleMessages=(p,msg,color)=>{
        setMessages(m=>({...m,[p]:msg}));
        setColors(c=>({...c,[p]:color}))
    }

    const showDataUser=()=>{
        setShowingData("block");
    }

    return(<>
        <div className="formContainer">
            <Title></Title>
            <Field form={form} messages={messages} colors={colors} changeField={handleChangeField}></Field>
            <Button form={form} changeMessages={handleMessages} activate={activateDynamicChanges} show={showDataUser}></Button>
            <Dialog form={form} showing={showingData}></Dialog>
        </div>
    </>);
}

export default Form;