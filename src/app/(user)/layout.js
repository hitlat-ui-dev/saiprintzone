"use client";
import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useRouter } from 'next/navigation'

const Userlayout = ({ children }) => {
  const router = useRouter(""); 
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])
  return (
    <>
      <Header />
      <container className="py-5 flex-col min-h-[calc(100vh_-_172px)]">
        {children}
        </container>
      <Footer />
    </>
  )
}

export default Userlayout