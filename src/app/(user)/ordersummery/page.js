"use client";
import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Table, Button  } from "flowbite-react";

const page = () => {
  
  return (
    <>
      <div className="flex justify-between">
        <Pagetitle Title="Order Pandding Summery" />
        <Button size="xs" className="bg-primary text-nowrap">Complated order</Button>
      </div>
      
      <div className="overflow-x-auto table-theme mt-2">
      <Table striped >
        <Table.Head className="text-black font-bold">
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>Order Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva o-34</Table.Cell>
            <Table.Cell>300GSM Golden</Table.Cell>
            <Table.Cell>60 pic</Table.Cell>
            <Table.Cell>Rs. 230.00</Table.Cell>
            <Table.Cell className="font-bold text-orange-400">
              Pandding
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva o-34</Table.Cell>
            <Table.Cell>300GSM Golden</Table.Cell>
            <Table.Cell>60 pic</Table.Cell>
            <Table.Cell>Rs. 230.00</Table.Cell>
            <Table.Cell className="font-bold text-orange-400">
              Pandding
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva o-34</Table.Cell>
            <Table.Cell>300GSM Golden</Table.Cell>
            <Table.Cell>60 pic</Table.Cell>
            <Table.Cell>Rs. 230.00</Table.Cell>
            <Table.Cell className="font-bold text-orange-400">
              Pandding
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    </>
  );
};

export default page;
