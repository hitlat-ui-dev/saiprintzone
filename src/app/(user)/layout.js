import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Userlayout = ({children }) => {
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