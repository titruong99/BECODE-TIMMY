import { useEffect, useState } from "react";
import Activity from "./Activity";

function ToDo(){
    const [toDos,setToDos]=useState([]);
    const[nbActivity,setNbActivity]=useState(1);
    const [toDo,setToDo]=useState("");
    const handleValueInput=(e)=>{
        setToDo(e.target.value);
    }

    const getLastIdToDo=()=>{
      fetch('http://localhost:5000/todos')
      .then(response => response.json())
      .then(data => {
        setNbActivity(data.length==0?1:parseInt(data[data.length-1].id)+1);
      })
      .catch(error => console.error("Erreur :", error));
      
    }

    const getToDosDB=(data)=>{
      let array=[];
      data.map(d=>{
        console.log(d.id);
        array.push({id:d.id,name:d.name});
      }
        );
      setToDos(array);
    }

    useEffect(() => {
      getLastIdToDo();
      return () => {
      };
    }, []);

    
    
    const addToDoDB = () => {
      fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({id:nbActivity+"", todo: toDo })
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Erreur HTTP : ${response.status}`);
              }
          })
          .catch(error => {
              console.error("Erreur lors de l'ajout :", error);
          });
  };
  

    const addToDo=()=>{
        if(toDo!=="" && toDo!==undefined){
            const newActivity = { name: toDo, nb: nbActivity };
            setToDos((prevToDos) => [...prevToDos, newActivity]);
            addToDoDB();
            setNbActivity((prev) => prev + 1);
        }
    }

    const updateToDoDB=(id,newActi)=>{
      const url = `http://localhost:5000/todos/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          todo: newActi,
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to update. Status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error("Error updating todo:", error);
      });
    }

    const updateToDo=(i,acti)=>{
        setToDos(toDos.map(t => t.nb === i ? { ...t, name: acti } : t));
        updateToDoDB(i,acti);
    }

    const deleteToDoDB=(i)=>{
      fetch('http://localhost:5000/todos/'+i, {
        method: 'DELETE',
      })
    }

    const deleteToDo=(i)=>{
        let newTodos=toDos.filter(t=>t.nb!==i)
        setToDos(newTodos);
        deleteToDoDB(i);       
    }

    const clearToDosDB=()=>{
      fetch('http://localhost:5000/todos')
      .then(response => response.json())
      .then(data => {
        data.forEach(todo => deleteToDoDB(todo.id));
      })
      .catch(error => console.error("Erreur :", error));
    }

    const clearToDos=()=>{
        setToDos([]);
        setNbActivity(1);
        clearToDosDB();
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
