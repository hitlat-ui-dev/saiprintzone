import React from "react";
import { Label, TextInput, Button, Select, Textarea } from "flowbite-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full bg-white p-5 rounded-md flex justify-between my-5">
      <div className="pro-left">
        <img
          src="../../../../images/catagory-img.png"
          alt="Catagory"
          className="w-full bg-gray-200"
        />
        <div className="title">
          300GMS 8/12 inch
          <span>Visiting Cards in 300GMS and white paper</span>
        </div>
        <div className="w-full flex justify-between items-end mt-5">
          <div className=" text-xs text-gray-400">minimum 20 pic</div>
          <div className="text-right">
            <span className="text-secondary font-bold">Rs. 21.00</span>
            <div className=" text-xs text-gray-400">Par pic</div>
          </div>
        </div>
      </div>
      <div className="pro-right">
        <div className="w-1/3 shrink-0 pr-5 inline-block mb-5">
          <Label value="Order Name" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div className="w-1/3 shrink-0 pr-5 inline-block mb-5">
          <Label value="Selected Product" />
          <TextInput type="text" sizing="sm" />
        </div>
        <div className="w-1/3 shrink-0 inline-block mb-5">
          <Label value="Quantity" />
          <div className="flex justify-start items-end">
            <TextInput
              type="text"
              sizing="sm"
              className="w-20 flex-none mr-3"
            />
            <span className=" text-xs text-gray-400 ">minimum 20 pic</span>
          </div>
        </div>
        <div className="w-1/2 shrink-0 pr-5 inline-block mb-5">
          <Label value="Printing" />
          <Select sizing="sm">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div className="w-1/2 shrink-0 inline-block mb-5">
          <Label value="Other Option" />
          <Select sizing="sm">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div className="w-full shrink-0 inline-block mb-5">
          <Label value="Remark" />
          <Textarea placeholder="Remark for us..." required rows={4} />
              </div>
              <div className="w-full bg-gray-100 rounded-md p-3 pb-5 flex justify-between">
                  <div className="w-36 title">Total Cost <span className="block">Rs 1780</span></div>
                  <div className="w-36 text-4xl items-center flex px-5">+</div>
                  <div className="w-36 title">Total Cost <span className="block">Rs 1780</span></div>
                  <div className="w-36 text-4xl items-center flex px-5">=</div>
                  <div className="w-36 title">Total Cost <span className="block">Rs 1780</span></div>
                  <div className="text-nowrap pt-3"><Link href="/payment"><Button className='bg-primary button-main'>Pay Now</Button></Link></div>
              </div>
      </div>
    </div>
  );
};

export default page;
