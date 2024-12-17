import Image from 'next/image'
import React from 'react'
import { CiBookmark, CiHeart } from "react-icons/ci";

interface UIpostCardProps {
    imagesLInk: string
    title: string
  }

function UIpostCard({imagesLInk, title}: UIpostCardProps) {
  return (
    <div className='relative max-w-[25rem] w-full rounded-lg overflow-hidden h-[20rem] group'>
        <Image 
            src={imagesLInk}
            alt={title}
            className='w-full h-full'
            width={400}
            height={320}
        />
        <div className="flex justify-between absolute bottom-0 w-full px-4 items-center py-5 bg-gradient-to-b from-black/10 to-slate-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className='text-white font-semibold'>{title}</h3>
            <div className="flex gap-2">
                <button className='w-9 h-9 bg-white rounded-full flex items-center justify-center'><CiBookmark className='text-xl font-bold' /></button>
                <button className='w-9 h-9 bg-white rounded-full flex items-center justify-center'><CiHeart className='text-xl font-bold' /></button>
            </div>
        </div>40
    </div>
  )
}

export default UIpostCard