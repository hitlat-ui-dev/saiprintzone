"use client";
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useRouter } from 'next/navigation'
import Loading from '../components/Loading';

const Userlayout = ({ children }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(""); 

  useEffect(() => {
    /* providing token in bearer */
fetch('https://dummyjson.com/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
  }, 
})
.then(res => res.json())
.then(console.log);
  },[])
  // useEffect(() => {
  //   const fetchCategoryData = async () => {
  //     const token = localStorage.getItem('token');
  //     console.log(data);
  //     if (!token) {
  //       router.push('/'); // Redirect to login if token is not found
  //       return;
  //     }

  //     try {
  //       const response = await axios.get('https://dummyjson.com/auth/me', {
          
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });
  //       setData(response.data);
  //       console.log(data);
  //     } catch (err) {
  //       setError('Failed to fetch data.');
  //       localStorage.removeItem('token'); // Remove token if request fails
  //       router.push('/'); // Redirect to login on error
  //     } 
  //     finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCategoryData();
  // }, [router]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     router.push('/');
  //   }
  // }, [])
  return (
    <>
      <Header />
      <pre className='text-white'>{JSON.stringify(data, null, 2)}</pre>
      <container className="py-5 flex-col min-h-[calc(100vh_-_172px)]">
        {children}
        </container>
      <Footer />
    </>
  )
}

export default Userlayout