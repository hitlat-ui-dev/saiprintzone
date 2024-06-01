import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Label, TextInput, Button, Select, Textarea, FileInput } from "flowbite-react";

const page = () => {
  return (
    <>
      <Pagetitle Title="Add New User" />
      <div className="w-full grid gap-10 grid-cols-4 my-5">
        <div>
          <Label value="Username" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Password" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Re-enter Password" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div></div>
        <div>
          <Label value="Full Name" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Email Address" className="text-white" />
          <TextInput type="text" sizing="sm" />
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
          <Button className='bg-primary mt-5'>Add New User</Button>
          </div>
      </div>
    </>
  );
};

export default page;
