import Dropdown from "@/components/Dropdown/SearchBarDropdown";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const options = [
    { value: 1, label: "Snap" },
    { value: 2, label: "Designer" },
  ];

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
            <Dropdown options={options} />
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
    </>
  );
}
