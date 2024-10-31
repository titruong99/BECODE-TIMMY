let input=document.querySelector("input");
let message=document.querySelector("p");
let button=document.querySelector("button");
let meals=document.querySelector(".meals");
let container=document.querySelector(".container");

const searchMeals= async(food)=>{
    let url = food.length==1?"https://www.themealdb.com/api/json/v1/1/search.php?f="+food
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

const createImageModalMeal=(meal)=>{
    let image=document.createElement("img");
    image.src=meal["strMealThumb"];
    image.style.width="200px";
    image.style.height="200px";
    image.style.marginTop="10px";
    image.style.borderRadius="100px";
    return image;
}

const createTitleModalMeal=(meal)=>{
    let title=document.createElement("h1");
    title.style.textAlign="center";
    title.innerText=meal["strMeal"];
    return title;
};

const createDescriptionText=(meal)=>{
    let description=document.createElement("p");
    description.innerText=`Instructions:\n${meal["strInstructions"]}`;
    return description;
}

const createModalDiv=()=>{
    let div=document.createElement("div");
    div.style.width="400px";
    div.style.backgroundColor="beige";
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.justifyContent="center";
    div.style.alignItems="center";
    div.style.gap="20px";
    div.style.position="absolute";
    div.style.top="2%";
    div.style.left="30%";
    div.style.borderRadius="20px";
    div.style.paddingLeft="10px";
    div.style.paddingRight="5px";
    div.style.paddingBottom="10px";
    return div;
};

const createModalMeal=(meal)=>{
    let div=createModalDiv();
    let image=createImageModalMeal(meal);
    let title=createTitleModalMeal(meal);
    let listIngredients=createListIngredientsWithMeasures(meal);
    let description=createDescriptionText(meal);
    div.append(image,title,listIngredients,description);
    container.appendChild(div);
}

const createDivMeal=(meal)=>{
    let div=document.createElement("div");
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.justifyContent="center";
    div.style.alignContent="center";
    div.style.textAlign="center";
    div.style.width="200px";
    div.style.height="200px";
    div.style.gap="5px";
    div.addEventListener("click",e=>{
        createModalMeal(meal);
    })
    return div;
}

const createImgMeal=(meal)=>{
    let imageMeal=document.createElement("img");
    imageMeal.src=meal["strMealThumb"];
    imageMeal.style.width="200px";
    imageMeal.style.height="200px";
    imageMeal.style.borderRadius="10px";
    return imageMeal;
}

const createMealName=(meal)=>{
    let mealName=document.createElement("p");
    mealName.innerText=meal["strMeal"];
    return mealName;
}

const createMeal=(meal)=>{
    let div=createDivMeal(meal);
    let image=createImgMeal(meal);
    let mealName=createMealName(meal);
    div.append(image,mealName);
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
    if(input.value==""){
        message.innerText="You have to put a value";
    }else{
        callSearchMeals();
    }

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
