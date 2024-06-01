"use client";
import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Table, Button, Tooltip } from "flowbite-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" flex-col items-center flex w-full my-10 tooltip-cent">
        <div className=" bg-blue-100 w-96 p-5 rounded-lg ">
          <span className="flex justify-center pr-5 mb-5">
            <img
              src="../images/saiprintzone_black.png"
              alt="Sai Print Zones"
              width="120px"
            />
          </span>
          <span className="font-semibold text-xl text-gray-800 text-center block">
            Copy Code and e-mail us on saiprintzone@gmail.com
          </span>
          <Tooltip content="Copy This Code">
            <div className="bg-white rounded-full w-full mt-3 p-3 text-center font-bold text-primary">Hitesh_sharva-OID_123</div>
            </Tooltip>
            <Link href="/catagory"><Button className='bg-primary button-main mt-5' fullSized>Back to Main Page</Button></Link>
        </div>
      </div>
    </>
  );
};

export default page;
