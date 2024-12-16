import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Signin() {
  return (
    <section className='flex min-h-screen'>
        <div className="hidden lg:block w-[24%] relative overflow-hidden h-screen">
           <Image
                className="w-28 absolute top-4 left-2"
                src="/images/dribble-logo.png"
                alt="Dribble logo"
                width={180}
                height={38}
            />
            <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
                src="https://cdn.dribbble.com/uploads/59677/original/1e3ef22a333a3e9891f2c3a6ead881a4.mp4?1733426247"
            ></video>
            <div className="absolute bottom-4 left-4 text-sm text-white">
              @nguyenhut
            </div>
      </div>
      <form className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:px-24">
        <h1 className="text-2xl font-bold mb-8">Sign in to Dribble</h1>
        <button className="w-full flex items-center justify-center py-3 mb-4 rounded-lg text-sm font-semibold border transition">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s"
            alt="Google Logo"
            className="w-5 h-5 mr-2 rounded-full"
            width={100}
            height={100}
          />
          Sign up with Google
        </button>
        <div className="w-full flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <label htmlFor="username" className='text-sm font-bold text-gray-800 mb-2'>Username or Email</label>
        <input type="text" className='border rounded-lg px-5 py-3 outline-none text-sm' />
        <label htmlFor="password" className='text-sm font-bold text-gray-800 mb-2 mt-7 flex justify-between'>Password <Link href="" className='font-normal underline'>Forgot?</Link></label>
        <input type="password" className='border rounded-lg px-5 py-3 outline-none text-sm' />
        <button className="w-full flex items-center justify-center py-3 mb-4 rounded-lg text-sm font-semibold text-white bg-gray-900 transition mt-5">Sign in</button>
        <p className="mt-4 text-xs text-gray-700 text-center">
          Don&apos;t have an account?{" "} 
          <Link href="#" className="underline">
            Sign In
          </Link>
        </p>
      </form>    
    </section>
  )
}

export default Signin