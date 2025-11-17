import React, { useEffect, useState } from 'react'
import Navbar from '../Components/navbar'

const Receipts = () => {
  const[receipts,setReceipts]=useState();
  

  useEffect(()=>{

    const saved = JSON.parse(localStorage.getItem('receipts'));
    setReceipts(saved);
  console.log(saved)

  },[])
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center gap-6 w-[80%] mx-auto'>
    {receipts?.map((receipt,index)=>(
      <div key={index} className='flex flex-col items-center gap-6 w-[80%] mx-auto  border border-gray-300 p-6'>


<table className='table-auto border-collapse border border-gray-300'>
  <tr>
    <th className='border border-gray-300 p-2'>Used Date</th>
    <th className='border border-gray-300 p-2'>Start Kms</th>
    <th className='border border-gray-300 p-2'>End Kms</th>
    <th className='border border-gray-300 p-2'>Start Time</th>
    <th className='border border-gray-300 p-2'>End Time</th>
    <th className='border border-gray-300 p-2'>Total Kms</th>
    <th className='border border-gray-300 p-2'>Extra Kms</th>
    <th className='border border-gray-300 p-2'>Total Hrs</th>
    <th className='border border-gray-300 p-2'>Extra Hrs</th>
    <th className='border border-gray-300 p-2'>Extra Hrs Amt</th>
    <th className='border border-gray-300 p-2'>Extra Kms Amt</th>
    <th className='border border-gray-300 p-2'>Drive Bhatta</th>
    <th className='border border-gray-300 p-2'>Base Rate</th>
    <th className='border border-gray-300 p-2'>Per Km Rate</th>
    <th className='border border-gray-300 p-2'>Extra Hrs Rate</th>
    <th className='border border-gray-300 p-2'>Extra Kms Rate</th>
    <th className='border border-gray-300 p-2'>Parking Charges</th>
    <th className='border border-gray-300 p-2'>Total Amount</th>
    <th className='border border-gray-300 p-2'>Vehicle</th>
  </tr>
  <tr>
    <td className='border border-gray-300 p-2'>{receipt.usedDate}</td>
    <td className='border border-gray-300 p-2'>{receipt.startKms}</td>
    <td className='border border-gray-300 p-2'>{receipt.endKms}</td>
    <td className='border border-gray-300 p-2'>{receipt.startTime}</td>
    <td className='border border-gray-300 p-2'>{receipt.endTime}</td>
    <td className='border border-gray-300 p-2'>{receipt.totalKms}</td>
    <td className='border border-gray-300 p-2'>{receipt.extraKms}</td>
    <td className='border border-gray-300 p-2'>{receipt.totalHrs}</td>
    <td className='border border-gray-300 p-2'>{receipt.extraHrs}</td>
    <td className='border border-gray-300 p-2'>{receipt.extraHrsAmt}</td>
    <td className='border border-gray-300 p-2'>{receipt.extraKmsAmt}</td>
    <td className='border border-gray-300 p-2'>{receipt.driveBhatta}</td>
    <td className='border border-gray-300 p-2'>{receipt.baseRate}</td>
    <td className='border border-gray-300 p-2'>{receipt.perKmRate}</td>
    <td className='border border-gray-300 p-2'>{receipt.extraHrsRate}</td>
    <td className='border border-gray-300 p-2'>{receipt.extraKmsRate}</td>
    <td className='border border-gray-300 p-2'>{receipt.parkingCharges}</td>
    <td className='border border-gray-300 p-2'>{receipt.totalAmount}</td>
    <td className='border border-gray-300 p-2'>{receipt.vehicle}</td>
  </tr>
</table>


      </div>
    ))}
    </div>
    </> 
  )
}

export default Receipts