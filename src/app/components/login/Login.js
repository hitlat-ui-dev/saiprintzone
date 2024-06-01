"use client";
import React from 'react'
import Title from "../title/Title";
import { Label, TextInput, Button } from "flowbite-react";
import Link from 'next/link';

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-80 flex flex-col'>
        <center><img src='../images/saiprintzone_white.png' alt='saiprintzone' width={185} /></center>
        <div className='w-full bg-white rounded-xl mt-5 p-5'>
          <Title Title="LOGIN" />
          <div className=' mt-5'>
            <Label value="Username" />
            <TextInput type="text" sizing="sm" />
          </div>
          <div className=' mt-5'>
            <Label value="Password" />
            <TextInput type="text" sizing="sm" />
          </div>
          
          <Link href="/catagory"><Button className='bg-primary button-main mt-5' fullSized>Login</Button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Login