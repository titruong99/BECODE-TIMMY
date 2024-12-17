import './App.css'
import Device from './Device'
import { useEffect, useState } from 'react'

function App() {

  const [devices,setDevices]=useState([]);

  const getAllDevices= async(url)=>{
    try {
      let res=await fetch(url);
      let data= await res.json();
      setDevices(data);
    } catch (error) {
      console.log("erreur:"+error);      
    }
  }

  const deleteDeviceDB=async(id)=>{
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  }  

  const updateDeviceDB = async (id,newDevice) => {
    try {
      const response = await fetch("http://localhost:5000/products/"+id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newDevice)
      });
    } catch (error) {
      console.error("Erreur :", error);
    }
  };
  

  const deleteDevice=(id)=>{
    setDevices(prevDevices=>
      prevDevices.filter(d=>
        d.id!==id)
      );
    deleteDeviceDB(id);
  }

  const updateInformation=(id,elemToUpdate,newInfo)=>{
    setDevices(prevDevices=>
      prevDevices.map(d=>{
        if(d.id==id){
          const newDevice={ ...d, [elemToUpdate]:newInfo };
          updateDeviceDB(id,newDevice);
          return newDevice;
        }
        return d;
      }
    ));
  }

  useEffect(() => {
    getAllDevices("http://localhost:5000/products");
    return () => {
    };
  }, []);

  return (
    <>
      <ul>
        {devices.map(d=><Device key={d.id} device={{ id:d.id, name:d.title, price:d.price, year:d.year, imgSrc:d.imgSrc,stock:d.stock, 
          deleteDevice:deleteDevice, updateInformation:updateInformation}}></Device>)}
      </ul>
    </>
  )
}

export default App
