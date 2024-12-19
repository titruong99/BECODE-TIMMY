import {useState } from "react";

function Device({device}){

    const [name,setName]=useState("PS5");
    const [image,setImage]=useState("https://media.direct.playstation.com/is/image/psdglobal/PS5PRO-Hero-1?$Background_Large$");
    const [price,setPrice]=useState("550");
    const [year,setYear]=useState("2020");
    const [stock,setStock]=useState(device.stock);


    const deleteDevice=()=>{
        device.deleteDevice(device.id);
    }

    const inCreaseOrDecreaseStock=(e)=>{
        const classes=e.target.className.split(" ");
        const newStock=classes[1]==="increase"?parseInt(stock)+1:parseInt(stock)-1;
        setStock(newStock);
        device.updateInformation(device.id,classes[0],newStock);
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
            <p>{device.price}{device.currency}</p>
            <p>{device.year}</p>
            <p>{device.stock}</p>
            <div>
                <button onClick={deleteDevice}>Delete</button>
                <button className="stock increase" onClick={inCreaseOrDecreaseStock}>Increase</button>
                <button className="stock decrease" onClick={inCreaseOrDecreaseStock}>Decrease</button>
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