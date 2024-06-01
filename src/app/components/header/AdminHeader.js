"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <>
      <div className="w-full bg-primary">
        <container className="gap-x-7 py-2">
          <Dropdown placement="bottom" label="User" inline>
            <Dropdown.Item>
              <Link href="/admin/adduser">Add New User</Link>
            </Dropdown.Item>
            {/* <Dropdown.Item>Edit Profile</Dropdown.Item> */}
            <Dropdown.Item>Edit Profile</Dropdown.Item>
          </Dropdown>
          <Dropdown placement="bottom" label="Add Products" inline>
            <Dropdown.Item>
              <Link href="/admin/addcatagory">Add Category</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/admin/addcatagory">Add Subcategory</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/admin/addcatagory">Add Product</Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown placement="bottom" label="Payment" inline>
            <Dropdown.Item><Link href="/admin/paymentsummery">Payment Summery</Link></Dropdown.Item>
          </Dropdown>
          <Dropdown placement="bottom" label="Order" inline>
            <Dropdown.Item><Link href="/admin/ordersummery">Order Summery</Link></Dropdown.Item>
          </Dropdown>
        </container>
      </div>
    </>
  );
};

export default AdminHeader;
