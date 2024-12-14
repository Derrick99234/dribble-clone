import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function Header() {
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
        <div className="flex gap-5 text-sm font-bold">
            <button type="button">Sign up</button>
            <button type="button" className='bg-[#0D0C22] text-white py-3 px-6 rounded-3xl'>Log in</button>
        </div>
    </header>
  )
}

export default Header