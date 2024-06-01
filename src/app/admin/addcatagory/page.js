import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Label, TextInput, Button, Select, Textarea, FileInput } from "flowbite-react";

const page = () => {
  return (
    <>
      <Pagetitle Title="Add New Catagory" />
      <div className="w-full grid gap-10 grid-cols-4 mt-5 mb-10">
        <div>
          <Label value="Catagory Name" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Catagory Photo" className="text-white" />
        <FileInput id="file-upload" helperText="SVG, PNG, JPG or GIF (MAX. 500x500px)." sizing="sm" colors="info" />
        </div>
        <div>
          <Button className='bg-primary mt-5'>Add New Catagory</Button>
          </div>
      </div>
      <Pagetitle Title="Add New SubCatagory" />
      <div className="w-full grid gap-10 grid-cols-4 mt-5 mb-10">
      <div>
          <Label value="Select Catagory" className="text-white" />
          <Select sizing="sm">
            <option>Catagory One</option>
          </Select>
        </div>
        <div>
          <Label value="Subcatagory Name" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Subcatagory Photo" className="text-white" />
        <FileInput id="file-upload" helperText="SVG, PNG, JPG or GIF (MAX. 500x500px)." sizing="sm" colors="info" />
        </div>
        <div>
          <Button className='bg-primary mt-5'>Add New Subcatagory</Button>
          </div>
      </div>
      <Pagetitle Title="Add New Product" />
      <div className="w-full grid gap-10 grid-cols-4 mt-5 mb-10">
      <div>
          <Label value="Select Catagory" className="text-white" />
          <Select sizing="sm">
            <option>Catagory One</option>
          </Select>
        </div>
        <div>
          <Label value="Select Subcatagory" className="text-white" />
          <Select sizing="sm">
            <option>Subcatagory One</option>
          </Select>
        </div>
        <div>
          <Label value="Product Name" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
          <Label value="Rate par pic" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
          <Label value="Minimum Qut" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
          <Label value="Other Details" className="text-white" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div>
        <Label value="Product Photo" className="text-white" />
        <FileInput id="file-upload" helperText="SVG, PNG, JPG or GIF (MAX. 500x500px)." sizing="sm" colors="info" />
        </div>
        <div>
          <Button className='bg-primary mt-5'>Add New Product</Button>
          </div>
      </div>
    </>
  );
};

export default page;
