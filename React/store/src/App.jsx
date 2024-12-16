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

  const deleteDevice=(id)=>{
    setDevices(prevDevices=>
      prevDevices.filter(d=>
        d.id!==id)
      );
  }

  const increaseDevice=(id)=>{
    setDevices(prevDevices=>
      prevDevices.map(d=>
      d.id===id?{ ...d, stock:d.stock+1 }:d
    ));
  }

  const decreaseDevice=(id)=>{
    setDevices(prevDevices=>
      prevDevices.map(d=>
      d.id===id?{ ...d, stock:d.stock-1 }:d
    ));
  }

  const updateInformation=(id,elemToUpdate,newInfo)=>{
    setDevices(prevDevices=>
      prevDevices.map(d=>
      d.id===id?{ ...d, [elemToUpdate]:newInfo }:d
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
          deleteDevice:deleteDevice,increaseDevice:increaseDevice,decreaseDevice:decreaseDevice,
          updateInformation:updateInformation}}></Device>)}
      </ul>
    </>
  )
}

export default App
