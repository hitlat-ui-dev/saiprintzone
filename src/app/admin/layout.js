import React from "react";
import Header from "../components/header/Header";
import AdminHeader from "../components/header/AdminHeader";
import Footer from "../components/footer/Footer";
const Adminlayout = ({ children }) => {
  return (
    <>
      <Header />
      <AdminHeader />
      <container className="py-5  min-h-[calc(100vh_-_212px)] block flex-none">{children}</container>
      <Footer />
    </>
  );
};

export default Adminlayout;
