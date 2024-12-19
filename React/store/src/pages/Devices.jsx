import ListDevices from "../ListDevices";

function Devices({devices,updateDevicesForApp}){

    return (<>
                <ListDevices devices={devices} updateDevicesForApp={updateDevicesForApp}></ListDevices>
            </>)
}

export default Devices;