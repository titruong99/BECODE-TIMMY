let buttonAdd=document.querySelector(".buttonAdd");
let buttonClear=document.querySelector(".clear");
let input= document.querySelector("input");
let message=document.querySelector("p");
let todos=document.querySelector(".todos");

let arrTodos=[];
let nbTask=1;

const createToDo=(elem,nb)=>{
    let todo=document.createElement("div");
    todo.style.borderBottom="1px solid black";
    todo.style.display="flex";
    todo.style.flexDirection="row";
    todo.style.alignItems="center";
    todo.style.justifyContent="space-between";

    let todoText=document.createElement("p");
    todoText.innerText=elem==null?input.value:elem;
    let value=nb<0?nbTask:nb;

    let deleteButton=createDeleteButton(todo,value,todoText.innerText);

    todo.appendChild(todoText);
    todo.appendChild(deleteButton);
    todos.appendChild(todo);

}

const createDeleteButton=(toDo,nb,toDoText)=>{
    let button=document.createElement("button");
    button.innerText="delete";
    button.style.height="20px";
    button.addEventListener("click",e=>{
        toDo.remove();
        localStorage.removeItem("task "+nb);
        arrTodos=arrTodos.filter(elem=>elem!=toDoText);
    });
    return button;
}

input.addEventListener("click",e=>{
    message.innerText="";
})

buttonAdd.addEventListener("click",e=>{
    if(input.value===""){
        message.innerText="You have to put a todo";
    }else{
        arrTodos.push(input.value);
        localStorage.setItem("task "+nbTask,input.value);
        createToDo(null,-1);
        nbTask++;
    }
});

buttonClear.addEventListener("click",e=>{
    if(arrTodos.length==0){
        message.innerText="You have nothing to clear";
    }else{
        nbTask=1;
        arrTodos=[];
        localStorage.clear();
        todos.innerHTML="";
    }
});


const reloadData=()=>{
    reloadArray();
    reloadLocaleStorage();
    reloadTodos();
}

const reloadArray=()=>{
    let tasks=Object.keys(localStorage);
    tasks.sort((a,b)=>{
        return parseInt(a.split(" ").pop())-parseInt(b.split(" ").pop());
    });

    for(let i=0;i<tasks.length;i++){
        arrTodos.push(localStorage.getItem(tasks[i]));
    }
}

const reloadLocaleStorage=()=>{
    localStorage.clear();
    for(let i=0;i<arrTodos.length;i++){
        localStorage.setItem("task "+(i+1),arrTodos[i]);
    }
    nbTask=arrTodos.length+1;
}

const reloadTodos=()=>{
    for(let i=0;i<arrTodos.length;i++){
        createToDo(arrTodos[i],i+1);
    }
}

reloadData();
