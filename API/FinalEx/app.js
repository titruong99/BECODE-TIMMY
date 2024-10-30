let input=document.querySelector("input");
let message=document.querySelector("p");
let button=document.querySelector("button");
let meals=document.querySelector(".meals");
let container=document.querySelector(".container");

const searchMeals= async(food)=>{
    let url = food.length==1?"https:www.themealdb.com/api/json/v1/1/search.php?f="+food
    :"https://www.themealdb.com/api/json/v1/1/search.php?s="+food;
    let res=await fetch(url);
    let data=await res.json();
    return data;
};

const callSearchMeals=async()=>{
    try {
        meals.innerHTML="";
        let obj= await searchMeals(input.value);
        message.innerText="These are the results for "+input.value;
        addMealsToView(obj["meals"]);
    } catch (error) {
        message.innerText="Sorry ! No meals for what you search..."
        console.log(error);
    }
}

const createListIngredientsWithMeasures=(meal)=>{
    let ingredients=Object.entries(meal).filter(elem=>elem[0].includes("strIngredient") && elem[1]);
    let measures=Object.entries(meal).filter(elem=>elem[0].includes("strMeasure") && elem[1]);
    const list= document.createElement("ul");
    list.innerText="Ingredients";
    for(let i=0;i<ingredients.length;i++){
        const ingredient = document.createElement("li");
        ingredient.textContent =`${ingredients[i][1]}: ${measures[i][1]}`;
        list.appendChild(ingredient);
    }
    return list;
};

const createModalMeal=(meal)=>{
    let div=document.createElement("div");
    div.style.width="300px";
    // div.style.height="300px";
    div.style.backgroundColor="beige";
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.justifyContent="center";
    div.style.alignItems="center";
    div.style.position="absolute";
    div.style.top="0%";
    div.style.left="25%";

    let button=document.createElement("button");
    button.style.position="right";
    button.innerText="x";
    button.addEventListener("click",e=>{
        div.remove();
    });

    let image=document.createElement("img");
    image.src=meal["strMealThumb"];
    image.style.width="100px";
    image.style.height="100px";

    let title=document.createElement("h1");
    title.innerText=meal["strMeal"];
    
    let listIngredients=createListIngredientsWithMeasures(meal);
    let description=document.createElement("p");
    description.innerText=`Instructions:\n${meal["strInstructions"]}`;

    div.appendChild(button);
    div.append(image);
    div.appendChild(title);
    div.appendChild(listIngredients);
    div.appendChild(description);

    container.appendChild(div);
    
}


const createMeal=(meal)=>{
    let div=document.createElement("div");
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.justifyContent="center";
    div.style.alignContent="center";
    div.style.textAlign="center";
    div.style.width="100px";
    div.style.height="100px";
    div.addEventListener("click",e=>{
        createModalMeal(meal);
    })

    let imageMeal=document.createElement("img");
    imageMeal.src=meal["strMealThumb"];
    imageMeal.style.width="80px";
    imageMeal.style.height="80px";
    
    let mealName=document.createElement("p");
    mealName.innerText=meal["strMeal"];

    div.appendChild(imageMeal);
    div.appendChild(mealName);
    return div;
}


const addMealsToView=(array)=>{
    array.forEach(element =>{
        meals.appendChild(createMeal(element));
    });
}

input.addEventListener("click",e=>{
    message.innerText="";
});

button.addEventListener("click",e=>{
    callSearchMeals();
    // if(input.value==""){
    //     message.innerText="You have to put a value";
    // }else{
    // }

});

input.addEventListener("keydown",e=>{
    if(e.key=="Enter"){
        callSearchMeals(input.value);
    }
});

container.addEventListener("click",e=>{
    if(e.target===container && container.children.length>1){
        container.removeChild(container.lastChild);
    }
});
