import Image from 'next/image'
import React from 'react'

interface ImageSliderProps {
    imagesLInk: string
    title: string
  }
function ImageSlider({ imagesLInk, title}:ImageSliderProps) {
  return (
    <div>
        <Image src={imagesLInk} alt={title} width={1200} height={600} className='w-56 h-36' />
        <p className='text-sm mt-2'>{title}</p>
    </div>
  )
}

export default ImageSlider