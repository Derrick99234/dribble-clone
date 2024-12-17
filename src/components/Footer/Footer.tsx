import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";

function Footer() {
  return (
 <footer className='px-48 max-[820px]:px-10'>
    <div className="flex items-center justify-between pt-14 max-[820px]:flex-col gap-5">
        <Image
            className="w-28 max-[820px]:w-36"
            src="/images/dribble-logo.png"
            alt="Dribble logo"
            width={180}
            height={38}
        />
        <div className="flex font-semibold text-sm gap-10 max-[820px]:gap-5 max-[480px]:flex-wrap max-[480px]:justify-center">
            <Link href="">For Designer</Link>
            <Link href="">Hire talent</Link>
            <Link href="">Inspiration</Link>
            <Link href="">Advertising</Link>
            <Link href="">Blog</Link>
            <Link href="">About</Link>
            <Link href="">Career</Link>
            <Link href="">Support</Link>
        </div>
        <div className="flex gap-2">
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
            <BiLogoPinterest />
        </div>
    </div>
    <div className="flex items-center justify-between text-sm text-gray-500 pt-16 pb-10 max-[480px]:flex-wrap max-[480px]:justify-center">
        <div className="flex gap-3 max-[480px]:flex-wrap max-[480px]:justify-center">
            <span>@2024 Dribble</span>
            <Link href="">Terms</Link>
            <Link href="">Privacy</Link>
            <Link href="">Cookies</Link>
        </div>
        <div className="flex gap-3 max-[480px]:flex-wrap max-[480px]:justify-center">
            <Link href="">Jobs</Link>
            <Link href="">Designers</Link>
            <Link href="">Freelancer</Link>
            <Link href="">Tag</Link>
            <Link href="">Places</Link>
            <Link href="">Resources</Link>
        </div>
    </div>
 </footer>
  )
}

export default Footer