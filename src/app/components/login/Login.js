"use client";
import React, { useState } from "react";
import Title from "../title/Title";
import { Label, TextInput, Button, Alert } from "flowbite-react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Loading from '../Loading'
const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await loginApi();
    setLoading(false);
    console.log(username, password);
  };
  const loginApi = () => {
    
    axios.post("https://dgpatelss.org.in/printing/web_api/user/signIn", {
      username: username,
      password: password
    })
    .then((result) => {
      console.log(result);
      if (result.data.token) {
        localStorage.setItem('token', result.data.token);
        router.push('/catagory'); // Replace with your desired route
      }
     
    }).catch((err) => {
      
      setError(<><span className="font-bold">Login failed...</span> Please check your username and password.</>);
    });
  }
  
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
          {error && (
            <Alert color="failure" className="my-3">
              {error}
            </Alert>
          )}
          
          {loading ? (
            <Loading />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className=" mt-5">
                <Label value="Username" />
                <TextInput type="text" sizing="sm" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className=" mt-5">
                <Label value="Password" />
                <TextInput type="password" sizing="sm" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            
              <Button type="submit" className="bg-primary button-main mt-5" fullSized>
                Login
              </Button>
            
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default Login;
