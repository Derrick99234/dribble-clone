"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Logout() {

    const router = useRouter()
    useEffect(() => {
      sessionStorage.clear();
      router.push('/signin')
    }, [])
    
  return (
    <div className='flex justify-center items-center h-screen text-lg font-semibold'>Logout...</div>
  )
}

export default Logout