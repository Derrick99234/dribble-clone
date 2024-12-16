"use client";
import Dropdown from "@/components/Dropdown/Dropdown";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import UIpostCard from "@/components/UIpostCard/UIpostCard";
import UImodel from "@/model/uipost.model.json"
import ImageSliderModel from "@/model/image-slider.model.json"
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import 'react-multi-carousel/lib/styles.css';
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const searchBarOptions = [
    { value: 1, label: "Snap" },
    { value: 2, label: "Designer" },
  ];

  const categoryDropdown = [
    { value: 1, label: "Popular" },
    { value: 2, label: "New & Noteworthy" },
  ]
  

  return (
    <>
      <Header/>
      <section className="flex items-center justify-center pt-10">
        <div className="flex flex-col gap-8 items-center max-w-[43rem]">
          <h1 className="text-6xl font-serif text-center w-4/5">Discover the world&apos;s top designers!</h1>
          <p className="text-base text-center w-4/5">
            Explore work from the most talented and accomplished designers ready to take on your next project
          </p>
          <div className="flex bg-gray-100 w-4/5 h-12 rounded-3xl items-center justify-center p-1 border-[3px] border-transparent hover:border-pink-200 hover:bg-white transition-colors duration-200">
            <input type="text" placeholder="What are you looking for ?" className="flex-1 h-full bg-transparent px-4 outline-none text-sm" />
            <Dropdown options={searchBarOptions} defaultLabel="Shots" />
            <CiSearch className="text-white bg-pink-500 w-9 h-9 rounded-full p-1" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">Trending searches</span>
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">landing page</span>
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">e-commerce</span>
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">mobile app</span>
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">logo design</span>
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">dashboard</span>
            <span className="bg-gray-100 text-[0.8rem] px-3 py-[0.1rem] rounded-3xl">icons</span>
          </div>
        </div>
      </section>
      <section className="p-20">
        <div className="flex items-center justify-between mb-10">
          <Dropdown options={categoryDropdown} otherStyles="border py-1 px-4 rounded-md font-medium text-xs" defaultLabel="Popular" listStyle="w-[11rem]" />
          <div className="flex font-semibold text-sm gap-10">
            <Link href="">Discover</Link>
            <Link href="">Animation</Link>
            <Link href="">Branding</Link>
            <Link href="">Illustration</Link>
            <Link href="">Mobile</Link>
            <Link href="">Print</Link>
            <Link href="">Product Design</Link>
            <Link href="">Typography</Link>
            <Link href="">Web Design</Link>
          </div>
          <button className="flex items-center gap-2 text-sm"><IoFilterOutline />Filters</button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {
            UImodel.map(UIpost => (
              <UIpostCard imagesLInk={UIpost.imageLink} key={UIpost.id} title={UIpost.title} />
            ))
          }
        </div>
        <div className="flex justify-center mt-10">
          <Link href="#" className='bg-[#0D0C22] text-xs font-semibold text-white py-3 px-5 rounded-3xl'>Sign up to continue</Link>
        </div>
      </section>
      <section className="flex carousel-track gap-4">
          {
            ImageSliderModel.map(imageSlider => (
                <ImageSlider imagesLInk={imageSlider.imageLink} key={imageSlider.id} title={imageSlider.title} />
            ))
          }
      </section>
      <Footer/>
    </>
  );
}
