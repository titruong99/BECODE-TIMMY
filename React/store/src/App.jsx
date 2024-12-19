import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Home from './pages/home'
import NewDevice from './pages/NewDevice'
import Devices from './pages/Devices'

function App() {
  const [devices,setDevices]=useState([]);

  const updateDevices=(newData)=>{
    console.log("tfiezhjfizufj");
    setDevices(newData);
  }

  const getAllDevices= async(url)=>{
    try {
      let res=await fetch(url);
      let data= await res.json();
      setDevices(data);
    } catch (error) {
      console.log("erreur:"+error);      
    }
  }

  useEffect(() => {
    getAllDevices("http://localhost:5000/products");
    return () => {
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-device" element={<NewDevice />} />
        <Route path="/devices" element={<Devices devices={devices} updateDevicesForApp={updateDevices}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
