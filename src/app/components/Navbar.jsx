"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-sm">
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between h-16 items-center">
            <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            MyApp
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-900">
              Item 1
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              Item 2
            </a>
          </div>

          {/* Button (right side) */}
          <div>
            <a
              href="#"
              className="px-4 py-2 bg-white border-2 border-black text-black rounded-md hover:bg-black hover:text-white hover:border-2 hover:border-white transition"
            >
              Button
            </a>
          </div>

          {/* Mobile menu button */}
          
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Item 2
          </a>
        </div>
      )}
    </nav>
  );
}
