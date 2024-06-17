import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white py-4">
      <container className=" justify-between">
        <img
          src="../images/saiprintzone_black.png"
          alt="saiprintzone"
          width="160"
        />
        <div className="text-gray-500 text-sm">
          <span className="font-bold w-full flex text-black">
            Office Address
          </span>
          4 Grand Central Terminal New York,
          <br />
          NY 10 City name, Mehsana 
        </div>
        <div className="text-gray-500 text-sm">
          <span className="font-bold w-full flex text-black">
            Contact Via Email
          </span>
          contact@example.com
        </div>
        <div className="text-gray-500 text-sm">
          <span className="font-bold w-full flex text-black">
            Contact Via Whatsapp
          </span>
          +91 000 000 0000, <br />
          +91 000 000 0000,
        </div>
      </container>
    </div>
  );
};

export default Footer;
