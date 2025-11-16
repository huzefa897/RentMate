import React, { useEffect, useEffectEvent } from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { Box, TextField, Button, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useState } from 'react'
import Navbar from '../Components/navbar'
import { MenuItem } from '@mui/material'
import { InputLabel } from '@mui/material'
import dayjs from "dayjs";
import { Select } from '@mui/material'
import { getRandomDayjs,totalHrs, totalKms, extraKms, extraHrs, extraHrsAmt, extraKmsAmt, totalAmount } from '../data/calculation'
import receiptStructure from '../data/receipt.json'
const Expense = () => {
  const [receipts, setReceipts] =   useState(JSON.parse(localStorage.getItem('receipts')));

  const [vehicle, setVehicle] = useState(JSON.parse(localStorage.getItem('vehicles')));
  const [formData, setFormData] = useState(
    {
      usedDate: "", // unique
      startKms: "", // unique
      endKms: "", // unique
      startTime: "", // unique
      endTime: "", // unique
      totalKms: "", // unique
      extraKms: "", // unique
      totalHrs: "", // unique
      extraHrs: "", // unique
      extraHrsAmt: "", // unique
      extraKmsAmt: "", // unique
      driveBhatta: "", // unique
      baseRate: "",
      perKmRate: "",
      extraHrsRate: "",
      extraKmsRate: "",
      parkingCharges: "", //unique
      totalAmount: "", //unique
      vehicle: ""
    }

  );
  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem('receipts'))){
     setReceipts(receiptStructure);
    }
    else{
      setReceipts(JSON.parse(localStorage.getItem('receipts')));
      console.log(receipts);
    }
  },[])
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicle(saved);
  }, [])

  useEffect(() => {
    const totalHrsVal = formData.totalHrs;
    const totalKmsVal = totalKms(formData.startKms, formData.endKms);
    const extraKmsVal = extraKms(totalKmsVal);
    const extraHrsVal = extraHrs(totalHrsVal);
    const extraHrsAmtVal = extraHrsAmt(extraHrsVal, formData.extraHrsRate);
    const extraKmsAmtVal = extraKmsAmt(extraKmsVal, formData.extraKmsRate);
    const totalAmountVal = totalAmount(
      totalKmsVal,
      formData.perKmRate,
      formData.baseRate,
      extraHrsAmtVal,
      extraKmsAmtVal,
      formData.driveBhatta,
      formData.parkingCharges
    );

    setFormData({
      ...formData,
      totalHrs: totalHrsVal,
      totalKms: totalKmsVal,
      extraKms: extraKmsVal,
      extraHrs: extraHrsVal,
      extraHrsAmt: extraHrsAmtVal,
      extraKmsAmt: extraKmsAmtVal,
      totalAmount: totalAmountVal,
    });
  }, [
    formData.totalHrs,
    formData.startKms,
    formData.endKms,
    formData.baseRate,
    formData.perKmRate,
    formData.extraHrsRate,
    formData.extraKmsRate,
    formData.driveBhatta,
    formData.parkingCharges,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name == "vehicle") {
      const selectedVehicle = vehicle.find((v) => v.sno === e.target.value);
      console.log(selectedVehicle);
      setFormData({
        ...formData,
        vehicle: value,
        baseRate: selectedVehicle.baseRate,
        perKmRate: selectedVehicle.perKmRate,
        extraHrsRate: selectedVehicle.extraHrsRate,
        extraKmsRate: selectedVehicle.extraKmsRate,
      })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })

    }

  }
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!valid) return;

  try {
    const updatedReceipts = Array.isArray(receipts) ? [...receipts] : [];
    updatedReceipts.push(formData);

    updatedReceipts.forEach((receipt, index) => {
      receipt.ReceiptId = index + 1;
    });

    localStorage.setItem('receipts', JSON.stringify(updatedReceipts));

    setReceipts(updatedReceipts);

    console.log("✅ Receipt saved:", formData);
  } catch (error) {
    console.error("❌ Failed to save receipt:", error);
  }
};

  const handleDummyData = () => {
    const randomDate = getRandomDayjs();
    const startKms = Math.floor(Math.random() * 1000000); // 0–999999
    const endKms = startKms + Math.floor(Math.random() * 100); // adds 0–499
    setFormData({
      usedDate: randomDate.format("YYYY-MM-DD"),
      startKms: startKms,
      endKms: endKms,
      totalHrs: Math.floor(Math.random()*48),
      driveBhatta: Math.floor(Math.random()*500),
      parkingCharges: Math.floor(Math.random()*500),
    })
  }
  return (
    <>
      <Navbar />

      <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8">
          <Typography variant="h5" align="center" gutterBottom>
            Expense Form
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mt: 3,
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="vehicle">Vehicle</InputLabel>
              <Select
                labelId="vehicle"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                label="Vehicle"
                onChange={handleChange}
              >
                {vehicle?.map((v) => (
                  <MenuItem key={v.sno} value={v.sno}>
                    {v.make}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateField']}>
                <DatePicker
                  label="Used Date"
                  value={formData.usedDate ? dayjs(formData.usedDate) : null}
                  onChange={(newValue) =>
                    setFormData({ ...formData, usedDate: newValue ? newValue.toISOString() : "" })
                  }
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField label="Start Kms" name="startKms" value={formData.startKms} onChange={handleChange} />
            <TextField label="End Kms" name="endKms" value={formData.endKms} onChange={handleChange} />
            <TextField label="Total Kms" name="totalKms" slotProps={{
              input: {
                readOnly: true,
              },
            }} value={formData.totalKms} />
            <TextField label="Extra Kms" name="extraKms" value={formData.extraKms}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }} onChange={handleChange} />
            <TextField label="Total Hrs" name="totalHrs" value={formData.totalHrs}
              onChange={handleChange} />
            <TextField label="Extra Hrs" name="extraHrs"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }} value={formData.extraHrs} onChange={handleChange} />
            <TextField label="Extra Hrs Amt" name="extraHrsAmt" slotProps={{
              input: {
                readOnly: true,
              },
            }} value={formData.extraHrsAmt} onChange={handleChange} />
            <TextField label="Extra Kms Amt" name="extraKmsAmt" slotProps={{
              input: {
                readOnly: true,
              },
            }} value={formData.extraKmsAmt} onChange={handleChange} />
            <TextField label="Driver Bhatta" name="driveBhatta" value={formData.driveBhatta} onChange={handleChange} />
            <TextField label="Basic Rate" name="baseRate"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              value={formData.baseRate} onChange={handleChange} />
            <TextField label="Per Km Rate" name="perKmRate"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              value={formData.perKmRate} onChange={handleChange} />
            <TextField label="Extra Hrs Rate" name="extraHrsRate"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              value={formData.extraHrsRate} onChange={handleChange} />
            <TextField label="Extra Kms Rate" name="extraKmsRate"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              value={formData.extraKmsRate} onChange={handleChange} />
            <TextField label="Parking Charges" name="parkingCharges"
              value={formData.parkingCharges} onChange={handleChange} />
            <TextField label="Total Amount" name="totalAmount"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              value={formData.totalAmount} />
              <Button onClick={handleDummyData}>Prefill</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <FormHelperText />
          </Box>
        </div>
      </div>
    </>
  )
}

export default Expense;