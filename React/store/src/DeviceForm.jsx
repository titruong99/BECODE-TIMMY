import { useState } from "react";

function DeviceForm(){
    const [name,setName]=useState("");
    const [picture,setPicture]=useState("");
    const [price,setPrice]=useState("");
    const [year,setYear]=useState("");
    const [stock,setStock]=useState("");


    const addDevice=(e)=>{
        if(name!=="" && picture!=="" && price!=="" && year!=="" && stock!==""){
            console.log("device à ajouter");
        }
    }

    const updateName=(e)=>{
        setName(e.target.value);
    }

    const updatePicture=(e)=>{
        setPicture(e.target.value);
    }

    const updatePrice=(e)=>{
        setPrice(e.target.value);
    }

    const updateYear=(e)=>{
        setYear(e.target.value);
    }

    const updateStock=(e)=>{
        setStock(e.target.value);
    }


    return (<>
        <div className="formNewDevice">
            <h1>New Device</h1>
            <label htmlFor="name">Name device?</label>
            <input onChange={updateName} className="name" type="text" id="name" />

            <label htmlFor="picture">url Picture?</label>
            <input onChange={updatePicture} className="picture" type="text" id="picture"/>

            <label htmlFor="price">Price?</label>
            <input onChange={updatePrice} className="price" type="number" id="price"></input>

            <label htmlFor="year">Year?</label>
            <input onChange={updateYear} className="year" type="number" id="year"></input>

            <label htmlFor="stock">Stock?</label>
            <input onChange={updateStock} className="stock" type="number" id="stock"></input>

            <button onClick={addDevice}>Add device</button>
        </div>

    </>);
}

export default DeviceForm;