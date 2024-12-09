import { useState } from "react";
import Activity from "./Activity";

function ToDo(){
    const[nbActivity,setNbActivity]=useState(1);
    const [toDos,setToDos]=useState([]);
    const [toDo,setToDo]=useState("");
    const handleValueInput=(e)=>{
        setToDo(e.target.value);
    }

    const addToDo=()=>{
        if(toDo!=="" && toDo!==undefined){
            const newActivity = { name: toDo, nb: nbActivity };
            setToDos((prevToDos) => [...prevToDos, newActivity]);
            setNbActivity((prev) => prev + 1);
        }
        console.log(toDos);
    }

    const updateToDo=(i,acti)=>{
        setToDos(toDos.map(t => t.nb === i ? { ...t, name: acti } : t));
    }

    const deleteToDo=(i)=>{
        let newTodos=toDos.filter(t=>t.nb!==i)
        setToDos(newTodos);       
    }

    const clearToDos=()=>{
        setToDos([]);
        setNbActivity(0);
    }

    return (<>
                <div className="toDoContainer">
                    <h1>Todo List React</h1>
                    <div className="addTodosDiv">
                        <input onChange={handleValueInput} type="text" name="" id="" placeholder="Add your todo here"/>
                        <button onClick={addToDo}>Add Todo</button>
                        <button onClick={clearToDos}>Clear</button>
                    </div>
                    <ul>
                        {toDos.map((t)=><Activity key={t.nb} activity={t.name} nb={t.nb} delete={deleteToDo} update={updateToDo}></Activity>)}
                    </ul>

                </div>
            </>
    );
}

export default ToDo;
