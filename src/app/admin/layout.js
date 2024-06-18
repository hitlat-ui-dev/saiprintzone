"use client";
import React, { useEffect } from "react";
import Header from "../components/header/Header";
import AdminHeader from "../components/header/AdminHeader";
import Footer from "../components/footer/Footer";
import { useRouter } from 'next/navigation'

const Adminlayout = ({ children }) => {
  const router = useRouter(""); 
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])
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
