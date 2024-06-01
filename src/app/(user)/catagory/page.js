import React from "react";
import Pagetitle from "../../components/title/Pagetitle";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Pagetitle Title="Products Category" />
      <div className="w-full grid gap-5 grid-cols-5 mt-5 mb-10">
        <Link href="/subcatagory" className="pro-box">
          <img src="../images/catagory-img.png" alt="Catagory" className="w-full bg-gray-200" />
          <div className="pro-title">Visiting Cards</div>
        </Link>
        <Link href="/subcatagory" className="pro-box">
          <img src="../images/catagory-img.png" alt="Catagory" className="w-full bg-gray-200" />
          <div className="pro-title">Visiting Cards</div>
        </Link>
        <Link href="/subcatagory" className="pro-box">
          <img src="../images/catagory-img.png" alt="Catagory" className="w-full bg-gray-200" />
          <div className="pro-title">Visiting Cards</div>
        </Link>
        <Link href="/subcatagory" className="pro-box">
          <img src="../images/catagory-img.png" alt="Catagory" className="w-full bg-gray-200" />
          <div className="pro-title">Visiting Cards</div>
        </Link>
        <Link href="/subcatagory" className="pro-box">
          <img src="../images/catagory-img.png" alt="Catagory" className="w-full bg-gray-200" />
          <div className="pro-title">Visiting Cards</div>
        </Link>
        <Link href="/subcatagory" className="pro-box">
          <img src="../images/catagory-img.png" alt="Catagory" className="w-full bg-gray-200" />
          <div className="pro-title">Visiting Cards</div>
        </Link>
      </div>
    </>
  );
};

export default page;
