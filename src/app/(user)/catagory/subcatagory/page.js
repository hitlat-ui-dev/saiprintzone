import React from "react";
import Pagetitle from "../../../components/title/Pagetitle";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Pagetitle Title="Category Name Here" />
      
      <div className="w-full grid gap-10 grid-cols-5 mt-5 mb-10">
      
        <Link href="/catagory/subcatagory/products" className="pro-box cat-box">
          <img
            src="../images/catagory-img.png"
            alt="Catagory"
            className="w-full bg-gray-200"
          />
          <div className="pro-title">Visiting Cards 1</div>
        </Link>
      </div>
    </>
  );
};

export default page;
