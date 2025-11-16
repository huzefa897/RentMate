import React, { useEffect,useState } from 'react'
import Navbar from '../Components/navbar'
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'
import vehicleData from '../data/vehicles.json';
const AddVehicleCategory = () => {
  const [vehicles,setVehicles]=useState(
    JSON.parse(localStorage.getItem('vehicles'))
  );
useEffect(()=>{
 if (!localStorage.getItem('vehicles')) {
   console.log("vehicles not found");
    const initialStructure =vehicleData;
    localStorage.setItem("vehicles", JSON.stringify(initialStructure));
  }else{
    setVehicles(JSON.parse(localStorage.getItem('vehicles')));
    console.log(vehicles);
  }
},[])

const handleDelete=(index)=>{
  const updatedVehicles=vehicles.filter((v,i)=>i!==index);
  setVehicles(updatedVehicles);
  localStorage.setItem('vehicles',JSON.stringify(updatedVehicles));
}
  return (
    <>
    <Navbar/>
    <div>AddVehicleCategory</div>
    <div className='flex flex-col items-center gap-6'>
    <table className="table-auto border-collapse border border-gray-300">
    <thead> 
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">S.No.</th>
        <th className="border border-gray-300 px-4 py-2">Make of the Vehicle</th>
        <th className="border border-gray-300 px-4 py-2">Model</th>
        <th className="border border-gray-300 px-4 py-2">Category</th>
        <th className="border border-gray-300 px-4 py-2">Base Rate</th>
        <th className="border border-gray-300 px-4 py-2">Per Km Rate</th>
        <th className="border border-gray-300 px-4 py-2">Extra hrs rate</th>
        <th className="border border-gray-300 px-4 py-2">Extra Kms Rate</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {vehicles?.map((v,index)=>(
 
      <tr>
        <td className="border border-gray-300 px-4 py-2">{index+1}</td>
        <td className="border border-gray-300 px-4 py-2">{v.make}</td>
        <td className="border border-gray-300 px-4 py-2">{v.model}</td>
        <td className="border border-gray-300 px-4 py-2">{v.category}</td>
        <td className="border border-gray-300 px-4 py-2">{v.baseRate}</td>
        <td className="border border-gray-300 px-4 py-2">{v.perKmRate}</td>
        <td className="border border-gray-300 px-4 py-2">{v.extraHrsRate}</td>
        <td className="border border-gray-300 px-4 py-2">{v.extraKmsRate}</td>
        <td className="border border-gray-300 px-4 py-2">
          <Link to={`/editVehicle/${index}`}>
            <Button variant="default" className="w-50 py-2 mt-6 bg-[#4A70A9] text-white">
              Edit
            </Button>
          </Link>
          <Button variant="default" className="w-50 py-2 mt-6 bg-[#4A70A9] text-white" onClick={()=>handleDelete(index)}>
            Delete
          </Button>
        </td>
      </tr>
      ))}
     
    </tbody>
  </table>
 
  <Link to="/NewVehicleForm"><Button variant="default" className="w-50 py-2 mt-6 bg-[#4A70A9] text-white">
  New Vehicle
</Button></Link>

 </div>
    </>
  )
}

export default AddVehicleCategory