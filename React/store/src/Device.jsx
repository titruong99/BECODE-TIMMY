import { useEffect, useState } from "react";

function Device({device}){

    const [name,setName]=useState("PS5");
    const [image,setImage]=useState("https://media.direct.playstation.com/is/image/psdglobal/PS5PRO-Hero-1?$Background_Large$");
    const [price,setPrice]=useState("550");
    const [year,setYear]=useState("2020");
    const [stock,setStock]=useState("10 000");


    const deleteDevice=()=>{
        device.deleteDevice(device.id);
    }

    const increase=()=>{
        device.increaseDevice(device.id);
    }

    const decrease=()=>{
        device.decreaseDevice(device.id);
    }

    const changeName=(e)=>{
        device.updateInformation(device.id,e.target.className,name);
    }

    const updateName=(e)=>{
        setName(e.target.value);
    }

    const changeImage=(e)=>{
        device.updateInformation(device.id,e.target.className,image);
    }

    const updateImage=(e)=>{
        setImage(e.target.value);
    }

    const changePrice=(e)=>{
        device.updateInformation(device.id,e.target.className,price);
    }

    const updatePrice=(e)=>{
        setPrice(e.target.value);
    }

    const changeYear=(e)=>{
        device.updateInformation(device.id,e.target.className,year);
    }

    const updateYear=(e)=>{
        setYear(e.target.value);
    }

    const changeStock=(e)=>{
        device.updateInformation(device.id,e.target.className,stock);
    }

    const updateStock=(e)=>{
        setStock(e.target.value);
    }

    return(
        <>
            <h1>{device.name}</h1>
            <img src={device.imgSrc} alt="image"></img>
            <p>{device.price}</p>
            <p>{device.year}</p>
            <p>{device.stock}</p>
            <div>
                <button onClick={deleteDevice}>Delete</button>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
                <button className="title" onClick={changeName}>Change name</button>
                <input onChange={updateName} type="text" />
                <button className="imgSrc" onClick={changeImage}>Change image</button>
                <input onChange={updateImage} type="text" />
                <button className="price" onClick={changePrice}>Change price</button>
                <input onChange={updatePrice} type="number" />
                <button className="year" onClick={changeYear}>Change year</button>
                <input onChange={updateYear} type="number" />
                <button className="stock" onClick={changeStock}>Change Stock</button>
                <input onChange={updateStock} type="number" />
                
            </div>
           
        </>
    );
}

export default Device;