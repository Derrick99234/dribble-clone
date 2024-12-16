"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
function Header() {
    const router = useRouter()

    const [emailOrUsername, setEmailOrUsername] = React.useState('');

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user){
            const parsedUser = JSON.parse(user) as { emailOrUsername: string };
            setEmailOrUsername(parsedUser.emailOrUsername);
        }

    }, []);
  return (
    <header className='flex items-center justify-between px-8 py-4'>
        <div className="flex items-center justify-center gap-10">
            <Image
                className="w-28"
                src="/images/dribble-logo.png"
                alt="Dribble logo"
                width={180}
                height={38}
            />
            <nav>
                <ul className='flex items-center justify-center gap-4 text-sm font-semibold'>
                    <li><Link href="#" className='flex items-center justify-center gap-1'>Explore <MdOutlineKeyboardArrowDown /></Link></li>
                    <li><Link href="#" className='flex items-center justify-center gap-1'>Hire a Designer <MdOutlineKeyboardArrowDown /></Link></li>
                    <li><Link href="#">Find Jobs</Link></li>
                    <li><Link href="#">Blogs</Link></li>
                </ul>
            </nav>
        </div>
        <div className="flex gap-5 text-sm font-bold items-center">
            {
                emailOrUsername? (
                    <>
                        <PiChatCircleTextLight className='text-2xl' />
                        <IoMdNotificationsOutline className='text-2xl' />
                        <button className='py-[6px] px-4 rounded-md text-gray-800 bg-gray-200 text-sm'>Go Pro</button>
                        <div className="group">
                            <div className="relative">
                                <Image
                                    className="w-10 h-10"
                                    src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_640.png"
                                    alt="Dribble logo"
                                    width={180}
                                    height={38}
                                />
                                <div className="w-3 border-2 border-white h-3 bg-green-300 absolute bottom-0 right-0 rounded-full"></div>
                            </div>
                            <div className="absolute right-0 mt-2 bg-white p-5 shadow-xl rounded-lg max-w-xs w-full hidden group-hover:block z-10">
                                <div className="relative mx-auto w-12">
                                    <Image
                                        className="w-12 h-12 rounded-full"
                                        src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_640.png"
                                        alt="Profile image"
                                        width={180}
                                        height={180}
                                    />
                                    <div className="w-3 h-3 border-2 border-white bg-green-300 rounded-full absolute bottom-0 right-0"></div>
                                </div>
                                <h3 className="text-center font-bold mt-2 mb-6">Olatunbosun Olashubomi</h3>
                                <Link href="#" className="font-normal">
                                    Settings
                                </Link>
                                <hr className="my-3" />
                                <Link href="#" className="font-normal">
                                    Log out
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                   <>
                    <button type="button" onClick={() => router.push("/signup")}>Sign up</button>
                    <button type="button" className='bg-[#0D0C22] text-white py-3 px-6 rounded-3xl' onClick={() => router.push("/signin")}>Log in</button>
                   </>
                )
            }
        </div>
    </header>
  )
}

export default Header