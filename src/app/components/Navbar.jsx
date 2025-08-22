"use client";
import { useState } from "react";
import LoginButton from "./LoginButton";
import Link from "next/link";

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
            E-commerce app
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-gray-200">
              Products
            </Link>
            <Link
              href="/dashboard/addProduct"
              className="text-white hover:text-gray-200"
            >
              Add product
            </Link>
          </div>

          {/* Button (right side) */}
          <div>
            <LoginButton></LoginButton>
          </div>

          {/* Mobile menu button */}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-gray-200">
            Products
          </Link>
          <Link
            href="/dashboard/addProduct"
            className="text-white hover:text-gray-200"
          >
            Add product
          </Link>
        </div>
      )}
    </nav>
  );
}
