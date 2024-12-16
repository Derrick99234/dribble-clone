"use client"
import { useState, useRef, useEffect } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect?: (option: Option) => void;
  otherStyles?: string
  listStyle?: string
  defaultLabel: string
}

export default function Dropdown({ options, onSelect, otherStyles, defaultLabel, listStyle }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mr-4" ref={dropdownRef}>
      <button
        className={`flex justify-between items-center gap-1 text-sm ${otherStyles}`}
        onClick={toggleDropdown}
      >
        {selected ? selected.label : defaultLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={`absolute z-10 mt-1 w-36 bg-white border border-gray-300 rounded-md shadow-lg py-3 text-sm ${listStyle}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className="hover:bg-gray-100/40 border border-transparent hover:border-gray-200 p-2 cursor-pointer w-4/5 mx-auto rounded-md"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
