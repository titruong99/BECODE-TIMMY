import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeviceForm({devices,updateDevicesForApp}){
    const [name,setName]=useState("");
    const [picture,setPicture]=useState("");
    const [price,setPrice]=useState(0);
    const [year,setYear]=useState("");
    const [stock,setStock]=useState(0);
    const navigate = useNavigate();

    const getLastId=()=>{
        return devices[devices.length-1].id;
    }

    const addDeviceDb=async (newDevice)=>{
        try {
        const response = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDevice)
        });
        } catch (error) {
            console.error('Erreur:', error);
        }          
    };

    const addDevice=(e)=>{
        e.preventDefault();
        if(name!=="" && picture!=="" && price!=="" && year!=="" && stock!==""){
            const newDevice={
                id:parseInt(getLastId())+1+"",
                title: name,
                price: price,
                currency: "€",
                year: year,
                stock: stock,
                imgSrc: picture
              };
            devices.push(newDevice);
            updateDevicesForApp(devices);
            addDeviceDb(newDevice);
            alert("device ajouté")
            navigate("/devices");
        }else{
            alert("Il manque une information");
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