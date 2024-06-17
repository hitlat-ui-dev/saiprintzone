"use client";
import React, { useState } from "react";
import Title from "../title/Title";
import { Label, TextInput, Button } from "flowbite-react";
import Link from "next/link";
import axios from "axios";

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //console.log(username, password);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const user = await loginApi({ username, password });

    // if (user) {
     
    // } else {
    //   // Show an error message
    // }
  };
  const loginApi = () => {
    console.log(username, password);
    axios.post("https://dgpatelss.org.in/printing/web_api/user/signIn", {
      username: username,
      password: password
    })
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }
  // const login = async (credentials) => {
  //   try {
  //     const response = await axios.post("https://dgpatelss.org.in/printing/web_api/user/signIn", credentials);
  //     return response.data;
  //     //console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col">
        <center>
          <img
            src="../images/saiprintzone_white.png"
            alt="saiprintzone"
            width={185}
          />
        </center>
        <div className="w-full bg-white rounded-xl mt-5 p-5">
          <Title Title="LOGIN" />
          
          
          <form onSubmit={handleSubmit}>
            <div className=" mt-5">
              <Label value="Username" />
              <TextInput type="text" sizing="sm" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className=" mt-5">
              <Label value="Password" />
              <TextInput type="password" sizing="sm" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            
              <Button type="submit" className="bg-primary button-main mt-5" fullSized>
                Login
              </Button>
            
          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;
