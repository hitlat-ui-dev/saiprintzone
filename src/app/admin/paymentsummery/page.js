"use client";
import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import { Table, Button, Select  } from "flowbite-react";

const page = () => {
  
  return (
    <>
      <div className="flex justify-between">
        <Pagetitle Title="Payment Pandding Summery" />
        <div className="flex justify-between">
          <Button size="xs" className="bg-primary text-nowrap">Save Changes</Button>
          </div>
      </div>
      
      <div className="overflow-x-auto table-theme mt-2">
      <Table striped >
        <Table.Head className="text-black font-bold">
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Payment By</Table.HeadCell>
          <Table.HeadCell>Payment Id</Table.HeadCell>
          <Table.HeadCell>Other Details</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva</Table.Cell>
            <Table.Cell>616cz51c65zc1</Table.Cell>
            <Table.Cell>SBI Bank</Table.Cell>
            <Table.Cell>Rs. 2300.00</Table.Cell>
            <Table.Cell>
            <Select sizing="sm">
            <option>Hold</option>
            <option>Recived</option>
          </Select>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva</Table.Cell>
            <Table.Cell>616cz51c65zc1</Table.Cell>
            <Table.Cell>SBI Bank</Table.Cell>
            <Table.Cell>Rs. 2300.00</Table.Cell>
            <Table.Cell>
            <Select sizing="sm">
            <option>Hold</option>
            <option>Recived</option>
          </Select>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva</Table.Cell>
            <Table.Cell>616cz51c65zc1</Table.Cell>
            <Table.Cell>SBI Bank</Table.Cell>
            <Table.Cell>Rs. 2300.00</Table.Cell>
            <Table.Cell>
            <Select sizing="sm">
            <option>Hold</option>
            <option>Recived</option>
          </Select>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>15-05-2024</Table.Cell>
            <Table.Cell>Hitesh_sharva</Table.Cell>
            <Table.Cell>616cz51c65zc1</Table.Cell>
            <Table.Cell>SBI Bank</Table.Cell>
            <Table.Cell>Rs. 2300.00</Table.Cell>
            <Table.Cell>
            <Select sizing="sm">
            <option>Hold</option>
            <option>Recived</option>
          </Select>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    </>
  );
};

export default page;
