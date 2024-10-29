let input=document.querySelector("input");
let message=document.querySelector("p");
let button=document.querySelector("button");

const searchMeals= async(food)=>{
    let url = food.length==1?"https:www.themealdb.com/api/json/v1/1/search.php?f=a"
    :"https://www.themealdb.com/api/json/v1/1/search.php?s="+food;
    let res=await fetch(url);
    let data=await res.json();
    return data;
};

const getStringMeals=(array)=>{
    let str="";
    array.forEach(element =>str+=element["strMeal"]+"\n");
    return str;
};

input.addEventListener("click",e=>{
    message.innerText="";
});

button.addEventListener("click",async e=>{
    // if(input.value==""){
    //     message.innerText="You have to put a value";
    // }else{
    // }
    try {
        let obj= await searchMeals(input.value);
        message.innerText=getStringMeals(obj["meals"]);
    } catch (error) {
        message.innerText="Sorry ! No Meals for what you search"
        console.log(error);
    }
});

