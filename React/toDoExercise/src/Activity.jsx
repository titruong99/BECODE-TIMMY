import { useState } from "react";

function Activity(activity){
    const [val,setVal]=useState("");
    const deleteActivity=(e)=>{
        activity.delete(activity.nb);
    }

    const handleEditValue=(e)=>{
        setVal(e.target.value);
    }

    const updateToDo=()=>{
        if(val!=="" && val !==undefined){
            activity.update(activity.nb,val);
        }
    }

    return (
        <>
            <div className="activity">
                <p>{activity.activity}</p>
                <input onChange={handleEditValue} type="text" name="" id="" placeholder="Edit todo" />
                <button onClick={updateToDo}>Edit</button>
                <button className="deleteActivity" onClick={deleteActivity} >x</button>
            </div>
        </>
    );
}

export default Activity;