import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Signup() {
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
                src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
            ></video>
            <div className="absolute bottom-4 left-4 text-sm text-white">
              @nguyenhut
            </div>
      </div>
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:px-24">
        <h1 className="text-2xl font-bold mb-8">Sign up to Dribble</h1>
        <button className="w-full flex items-center justify-center py-3 mb-4 rounded-lg text-sm font-semibold text-white bg-gray-800 transition">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s"
            alt="Google Logo"
            className="w-5 h-5 mr-2 rounded-full"
            width={100}
            height={100}
          />
          Sign up with Google
        </button>
        <div className="w-full flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full border text-gray-800 py-3 rounded-lg transition text-sm font-semibold">
          Continue with email
        </button>
        <p className="text-xs text-gray-500 mt-6 text-center">
          By creating an account you agree with our{" "}
          <Link href="#" className="underline">
            Terms of Service
          </Link>
          ,{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          and default{" "}
          <Link href="#" className="underline">
            Notification Settings
          </Link>
        </p>
        <p className="mt-4 text-xs text-gray-700 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="underline">
            Sign In
          </Link>
        </p>
      </div>    
    </section>
  )
}

export default Signup