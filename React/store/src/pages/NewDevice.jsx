import DeviceForm from "../DeviceForm";
function NewDevice({devices,updateDevicesForApp}){
    return (
        <>
        <DeviceForm devices={devices} updateDevicesForApp={updateDevicesForApp}></DeviceForm>
        </>);
}

export default NewDevice;