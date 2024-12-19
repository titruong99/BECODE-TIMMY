import Device from './Device';

function ListDevices({devices,updateDevicesForApp}){

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
    devices=devices.filter(d=>
        d.id!==id);
    updateDevicesForApp(devices);
    deleteDeviceDB(id);
  }

  const updateInformation=(id,elemToUpdate,newInfo)=>{
    devices=devices.map(d=>{
      if(d.id==id){
        const newDevice={ ...d, [elemToUpdate]:newInfo };
        updateDeviceDB(id,newDevice);
        return newDevice;
      }
      return d;
    })
    updateDevicesForApp(devices);
  }

    return (<>
        <ul>
            {devices.map(d=><Device key={d.id} device={{ id:d.id, name:d.title, price:d.price, year:d.year, imgSrc:d.imgSrc,stock:d.stock, 
            deleteDevice:deleteDevice, updateInformation:updateInformation}}></Device>)}
        </ul>
            </>)
}

export default ListDevices;