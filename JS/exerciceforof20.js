let toDoList=[];
let command=prompt("Enter a command ");
while(command!="quit"){
    switch(command){
        case "new":
            let toDo=prompt("What do you have to do ?");
            toDoList.push(toDo);
            console.log("The todo was added to the list !");
            command=prompt("Enter a command ");
            break;
        case "list":
            console.log("********* TODO LIST *********");
            for(let i=0;i<toDoList.length;i++){
                console.log((i+1)+". "+ toDoList[i]);
            }
            command=prompt("Enter a command ");
            break;
        case "delete":
            if(toDoList.length==0){
                alert("Nothing to delete in your list");
            }else{
                let index=prompt("Which toDo do you want to delete?");
                if(index<=0){
                    alert("We start at 1...");
                }else if(index-1<toDoList.length){
                    toDoList.splice(index-1,1);
                    alert("ToDo n°"+index+" removed");
                }else{
                    alert("Your index is too high");
                }
            }

            command=prompt("Enter a command ");
            break;
        default:
            alert("You give me a command unknown!");
            command=prompt("Enter a command ");
            break;
    }
}
alert("Job is finished");