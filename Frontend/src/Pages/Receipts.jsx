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



    <p>Used Date: {receipt.usedDate}</p>
    <p>Start Kms: {receipt.startKms}</p>
    <p>End Kms: {receipt.endKms}</p>
    <p>Start Time: {receipt.startTime}</p>
    <p>End Time: {receipt.endTime}</p>
    <p>Total Kms: {receipt.totalKms}</p>
    <p>Extra Kms: {receipt.extraKms}</p>
    <p>Total Hrs: {receipt.totalHrs}</p>
    <p>Extra Hrs: {receipt.extraHrs}</p>
    <p>Extra Hrs Amt: {receipt.extraHrsAmt}</p>
    <p>Extra Kms Amt: {receipt.extraKmsAmt}</p>
    <p>Drive Bhatta: {receipt.driveBhatta}</p>
    <p>Base Rate: {receipt.baseRate}</p>
    <p>Per Km Rate: {receipt.perKmRate}</p>
    <p>Extra Hrs Rate: {receipt.extraHrsRate}</p>
    <p>Extra Kms Rate: {receipt.extraKmsRate}</p>
    <p>Parking Charges: {receipt.parkingCharges}</p>
    <p>Total Amount: {receipt.totalAmount}</p>
    <p>Vehicle: {receipt.vehicle}</p>


      </div>
    ))}
    </div>
    </> 
  )
}

export default Receipts