import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Label, TextInput, Button, Select, Textarea, FileInput } from "flowbite-react";
import Title from "@/app/components/title/Title";

const page = () => {
  return (
    <>
      
      <div className='w-full flex justify-center items-center'>
      <div className='w-80 flex flex-col'>
        <div className='w-full bg-white rounded-xl mt-5 p-5'>
          <Title Title="Change Password" />
          <div className=' mt-5'>
            <Label value="Username" />
            <TextInput type="text" sizing="sm" />
          </div>
          <div className=' mt-5'>
            <Label value="Password" />
            <TextInput type="text" sizing="sm" />
            </div>
            <div className=' mt-5'>
            <Label value="Reenter Password" />
            <TextInput type="text" sizing="sm" />
          </div>
          <Button className='bg-primary button-main mt-5' fullSized>Change Password</Button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default page;
