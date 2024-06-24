"use client";
import React, { useState } from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Label, TextInput, Button, Select, Textarea, FileInput } from "flowbite-react";
import axios from "axios";
import { useRouter } from 'next/navigation'

const page = () => {
  const [message, setMessage] = useState('');
   const [formData, setFormData] = useState({
    //username: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await registerApi();
    console.log(formData);
  };
  
  const registerApi = () => {
    axios.post("https://reqres.in/api/register", {
      ...formData
    })
    .then((result) => {
      console.log(result);
      if (result.data.token) {
        setMessage('Signup successful!');
      }
     
    }).catch((err) => {
      setMessage('Signup failed. Please try again.');
    });
  }


  return (
    <>
      <Pagetitle Title="Add New User" />
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
      <div className="w-full grid gap-10 grid-cols-4 my-5">
      
        <div>
          <Label value="Username" className="text-white" />
          <TextInput type="text" sizing="sm" name="username"
            value={formData.username}
            onChange={handleChange}
             />
        </div>
        <div>
        <Label value="Password" className="text-white" />
          <TextInput type="password" sizing="sm" name="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </div>
        
        <div>
            <Label value="Full Name" className="text-white" />
            <TextInput type="text" sizing="sm" />
          
        </div>
        <div>
        <Label value="Email Address" className="text-white" />
        <TextInput type="email" sizing="sm" name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div>
        <Label value="Mobile Number" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        
        <div>
          <Label value="Shop Name" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Address" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Area Or Landmark" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="City" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Pincode" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Your Photo" className="text-white" />
        <FileInput id="file-upload" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." sizing="sm" colors="info" />
        </div>
        <div>
          <Button type="submit" className='bg-primary mt-5'>Add New User</Button>
          </div>
          
      </div>
      </form>
    </>
  );
};

export default page;
