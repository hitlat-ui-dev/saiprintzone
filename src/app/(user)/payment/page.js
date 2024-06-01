"use client";
import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Table } from "flowbite-react";
import Link from "next/link";

const page = () => {
  
  return (
    <>
      <Pagetitle Title="Add Money & your Wallet" />
      <div className="mt-5 w-full flex justify-between items-center overflow-hidden mb-10">
        <div className="rounded-lg bg-white w-full">
          <div className="block text-center font-semibold mt-3">
            Add Money via Bank
          </div>
          <div className="title ml-5 mb-5">
            Bank Name<span>ICICI Bank Ltd</span>
          </div>
          <div className="title ml-5 mb-5">
            Account Name<span>Sai Print Zone Pvt. Ltd</span>
          </div>
          <div className="title ml-5 mb-5">
            Account Number<span>0000 0000 00000</span>
          </div>
          <div className="title ml-5 mb-5">
            IFSC Code<span>ICICI000000154</span>
          </div>
          <div className="title ml-5 mb-5">
            Branch Name<span>Malgodown Road, Mehsana</span>
          </div>
          <div className="bg-blue-100 pb-3 rounded-lg flex">
            <div className="title ml-5 ">
            UPI ID<span>SAIPRINT@ICICI</span>
            </div>
          </div>
        </div>
        <div className="mx-20 rounded-full bg-primary w-10 h-10 text-lg font-semibold text-white text-center pt-1.5 shrink-0">
          Or
        </div>
        <div className="rounded-lg bg-blue-100 w-full text-center">
        
        <div className="flex justify-between">
        <img
            src="../images/saiprintzone_black.png"
            alt="Sai Print Zones"
            width="120px"
            className=" m-5"
            />
            <span className=" text-center font-semibold mt-3 text-2xl pr-5 pt-5 text-gray-800">
            Scan QR Code
          </span>
          </div>
          <div className=" flex justify-center">
          <Link href="/ordercode"><img
            src="../images/QR.png"
            alt="QR Code Sai Print Zones"
            width="280px"
            className=" p-5 bg-white rounded-xl m-5 "
          /></Link>
          </div>
        </div>
      </div>
      <Pagetitle Title="Last Payments" />
      <div className="overflow-x-auto table-theme mt-2">
      <Table striped >
        <Table.Head className="text-black font-bold">
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Paymeny ID</Table.HeadCell>
          <Table.HeadCell>Bank Details</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>0054652055588255</Table.Cell>
            <Table.Cell>SBI Bank 00254</Table.Cell>
            <Table.Cell>Rs. 2000.00</Table.Cell>
            <Table.Cell className="font-bold text-orange-400">
              Pandding
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>0054652055588255</Table.Cell>
            <Table.Cell>SBI Bank 00254</Table.Cell>
            <Table.Cell>Rs. 2000.00</Table.Cell>
            <Table.Cell className="font-bold text-green-400">
              Done
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>0054652055588255</Table.Cell>
            <Table.Cell>SBI Bank 00254</Table.Cell>
            <Table.Cell>Rs. 2000.00</Table.Cell>
            <Table.Cell className="font-bold text-red-500">
              Cancle
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    </>
  );
};

export default page;
