let buttonAdd=document.querySelector(".buttonAdd");
let buttonClear=document.querySelector(".clear");
let input= document.querySelector("input");
let message=document.querySelector("p");
let todos=document.querySelector(".todos");
let number=localStorage.getItem("currentNumberTask")===null?1:localStorage.getItem("currentNumberTask");

const getAssociatedKey=(value)=>{
    for(let i=0;i<localStorage.length;i++){
        if(value===localStorage.getItem(localStorage.key(i))){
            return localStorage.key(i);
        }
    }
    return null;
}

const createToDo=taskText=>{
    let task=document.createElement("p");
    task.innerText=taskText==""?input.value:taskText;
    let deleteButton=createDeleteButton(task);
    let todo=document.createElement("div");
    todo.style.borderBottom="1px solid black";
    todo.style.display="flex";
    todo.style.flexDirection="row";
    todo.style.alignItems="center";
    todo.style.justifyContent="space-between";
    todo.dataset.task="task "+number;
    todo.appendChild(task);
    todo.appendChild(deleteButton);
    todos.appendChild(todo);
}

const createDeleteButton=(task)=>{
    let button=document.createElement("button");
    button.innerText="delete";
    button.style.height="20px";
    button.dataset.task="task "+number;
    button.addEventListener("click",e=>{
        console.log("innerText:"+task.innerText);
        console.log("key: "+getAssociatedKey(task.innerText));
        localStorage.removeItem(getAssociatedKey(task.innerText));
        todos.removeChild(document.querySelector(`[data-task="${button.dataset.task}"]`));
    });
    return button;
}

buttonAdd.addEventListener("click",e=>{
    number=localStorage.getItem("currentNumberTask")===null?1:localStorage.getItem("currentNumberTask");
    if(input.value!==""){
        localStorage.setItem("task "+number,input.value);
        number++;
        localStorage.setItem("currentNumberTask",number)
        createToDo("");
    }else{
        message.innerText="You have to put a todo";
    }
});

buttonClear.addEventListener("click",e=>{
    if(localStorage.length==0){
        message.innerText="You have no todos to delete";
    }else{
        localStorage.clear();
        todos.innerHTML="";
    }
});

input.addEventListener("click",e=>{
    message.innerText="";
});

const reloadData=()=>{
    number=localStorage.getItem("currentNumberTask")===null?1:localStorage.getItem("currentNumberTask");
    const keys = Object.keys(localStorage);
    let tasks=keys.filter(key=>key.includes("task"));
    tasks.sort((a,b)=>{
        return parseInt(a.split(" ").pop())-parseInt(b.split(" ").pop());
    });
    tasks.forEach(elem=>createToDo(localStorage.getItem(elem)));
};

reloadData();


