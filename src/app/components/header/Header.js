"use client";
import { Container } from "postcss";
import React from "react";
import { FaRegMoneyBill1, FaIndianRupeeSign, FaWallet } from "react-icons/fa6";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-white h-20">
      <container className="items-center justify-between">
      <Link href="/"><img
          src="../images/saiprintzone_black.png"
          alt="saiprintzone"
          width="160"
        /></Link>
        <div className="flex flex-row">
          <div className="mr-5 border border-gray-400 bg-gray-50 px-3 py-2 rounded-3xl flex flex-row">
            <FaWallet className="text-3xl ml-2 mr-3" />
            <span className="text-lg font-bold mr-2 flex flex-row text-secondary">
              Rs. 1852
            </span>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="../images/user.png"
              alt="saiprintzone"
              width="40"
              className="mr-2 bg-gray-50 rounded-full"
            />
            <div className="flex flex-col mr-5">
              <span className="font-bold">Hitesh_sharva</span>
              <span className="text-gray-500 text-xs">sharva enterprise, Mehsana</span>
            </div>
            <Dropdown placement="bottom" inline>
              <Dropdown.Item><Link href="/changepassword">Change Password</Link></Dropdown.Item>
              <Dropdown.Item><Link href="/ordersummery">Order Summary</Link></Dropdown.Item>
              <Dropdown.Item><Link href="/payment">Add to Wallet</Link></Dropdown.Item>
              <Dropdown.Item><Link href="/">Sign out</Link></Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Header;
