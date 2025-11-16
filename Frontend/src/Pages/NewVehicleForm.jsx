import React from 'react'
import Navbar from '../Components/navbar'
import { useState } from "react";
import vehiclesData from '../data/vehicles.json';
import { Box, TextField, Button, Typography } from "@mui/material";
const NewVehicleForm = () => {
  const [vehicle, setVehicle] = useState(JSON.parse(localStorage.getItem('vehicles')));
  console.log(vehicle);
  const [formData, setFormData] = useState(
    {
      sno: "",
      make: "",
      model: "",
      category: "",
      baseRate: "",
      perKmRate: "",
      extraHrsRate: "",
      extraKmsRate: "",
    }

  )
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    vehicle?.push(formData);
    localStorage.setItem('vehicles',JSON.stringify(vehicle));
    setVehicle(vehicle);

  };

  return (
    <>
      <Navbar />


      <div className='flex flex-col items-center gap-6'>NewVehicleForm</div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 300,
          margin: "50px auto",
        }}
      >
        <Typography variant="h5" textAlign="center">
          New Vehicle Form
        </Typography>
        <TextField
          label="S.No"
          value={formData.sno}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Make"
          value={formData.make}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Model"
          value={formData.model}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Category"
          value={formData.category}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Base Rate"
          value={formData.baseRate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Per Km Rate"
          value={formData.perKmRate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Extra Hrs Rate"
          value={formData.extraHrsRate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Extra Kms Rate"
          value={formData.extraKmsRate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        {/* <TextField
          label="Actions"
          value={formData.actions}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        /> */}
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
        <Button
          onClick={() =>
            setFormData({
              sno: Math.floor(Math.random() * 1000000),
              make: "Test Product",
              model: "This is just a test",
              category: "Test Brand",
              baseRate: "Testing",
              perKmRate: "10",
              extraKmsRate: "10",
              // actions: "Edit / Delete",
            })
          }
        >
          Prefill Test Data
        </Button>
      </Box>
    </>

  )
}

export default NewVehicleForm