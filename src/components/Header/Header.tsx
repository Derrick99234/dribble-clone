"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useUserData } from '@/context/UserContext';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
function Header() {
    const router = useRouter()
    const { userData } = useUserData()
    const [profileName, setProfileName] = React.useState('');
    const [showDropdown, setShowDropdown] = React.useState(false);

    useEffect(() => {
        if (userData && userData.emailOrUsername){ 
            setProfileName(userData.emailOrUsername);
        }
    }, [userData]);
  return (
    <header className='flex items-center justify-between px-8 py-4'>
        <div className="flex items-center justify-center gap-10 max-[820px]:gap-0">
            {
                !showDropdown ? (
                        <HiOutlineMenuAlt2 className='hidden max-[820px]:block text-3xl cursor-pointer' onClick={() => setShowDropdown(!showDropdown)} />
                ) : (
                    <IoCloseSharp className='hidden max-[820px]:block text-3xl cursor-pointer' onClick={() => setShowDropdown(!showDropdown)} />
                )
            }
            <Image
                className="w-28 max-[820px]:w-32"
                src="/images/dribble-logo.png"
                alt="Dribble logo"
                width={180}
                height={38}
            />
            <nav className={`${showDropdown ? "max-[820px]:block absolute bg-black/20 bottom-0 right-0 left-0 top-20 z-50" : "max-[820px]:hidden"}`} onClick={() => setShowDropdown(!showDropdown)}>
                <ul className={`flex items-center justify-center gap-4 text-sm font-semibold ${showDropdown ? "max-[820px]:text-xl max-[820px]:font-bold max-[820px]:flex-col max-[820px]:items-start max-[820px]:p-10 max-[820px]:border-t max-[820px]:border-gray-600 max-[820px]:bg-white" : ""}`}>
                    <li><Link href="#" className='flex items-center justify-center gap-1'>Explore <MdOutlineKeyboardArrowDown /></Link></li>
                    <li><Link href="#" className='flex items-center justify-center gap-1'>Hire a Designer <MdOutlineKeyboardArrowDown /></Link></li>
                    <li><Link href="#">Find Jobs</Link></li>
                    <li><Link href="#">Blogs</Link></li>
                    <li><Link href="#" className='text-pink-400 hidden max-[820px]:block'>Go Pro</Link></li>
                </ul>
            </nav>
        </div>
        <div className="flex gap-5 text-sm font-bold items-center">
            {
                profileName? (
                    <>
                        <PiChatCircleTextLight className='text-2xl' />
                        <IoMdNotificationsOutline className='text-2xl' />
                        <button className='py-[6px] px-4 rounded-md text-gray-800 bg-gray-200 text-sm max-[820px]:hidden'>Go Pro</button>
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
                            <div className="absolute right-2 mt-2 top-12 bg-white p-5 shadow-xl hover:block rounded-lg max-w-xs w-full hidden group-hover:block z-50 border-4">
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
                                <h3 className="text-center font-bold mt-2 mb-6">{profileName}</h3>
                                <Link href="#" className="font-normal">
                                    Settings
                                </Link>
                                <hr className="my-3" />
                                <Link href="/logout" className="font-normal">
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