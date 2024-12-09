import { useState } from "react";
import Activity from "./Activity";

function ToDo(){
    const[nbActivity,setNbActivity]=useState(1);
    const [toDos,setToDos]=useState([]);
    const [toDo,setToDo]=useState({});
    const handleValueInput=(e)=>{
        setToDo({ name: e.target.value, nb:nbActivity });
    }

    const addToDo=()=>{
        if(toDo.name!=="" && toDo.name!==undefined){
            setToDos(t=>([...t,toDo]));
            setNbActivity(n=>n+1);
        }
    }

    const deleteToDo=(i)=>{
        let newTodos=toDos.filter(t=>t.nb!==i)
        setToDos(newTodos);       
    }

    return (<>
                <div className="toDoContainer">
                    <h1>Todo List React</h1>
                    <div className="addTodosDiv">
                        <input onChange={handleValueInput} type="text" name="" id="" placeholder="Add your todo here"/>
                        <button onClick={addToDo}>Add Todo</button>
                    </div>
                    <ul>
                        {toDos.map((t,index)=><Activity key={index} activity={t.name} nb={t.nb} delete={deleteToDo}></Activity>)}
                    </ul>

                </div>
            </>
    );
}

export default ToDo;
