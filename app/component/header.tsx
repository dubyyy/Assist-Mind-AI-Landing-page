'use client'
import React, { useState } from "react";
import Sidebar from "./sidebar";
import MenuIcon from "./menu-icon";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon */}
        
              
         
                
                <div className="lg:hidden md:hidden">
                  <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

                
                

             
          

          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-blue-700 hidden lg:block">
            <div className="relative w-[12rem] h-[2rem]">
              <Image src="/logo.png" alt="logo" fill />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link href="/" className="hover:text-blue-700 transition text-black">Home</Link>
          <Link href="#features" className="hover:text-blue-700 transition text-black">Features</Link>
          <Link href="#how-it-works" className="hover:text-blue-700 transition text-black">How it works</Link>
          <Link href="#resources" className="hover:text-blue-700 transition text-black">Resources</Link>
          <Link href="#pricing" className="hover:text-blue-700 transition text-black">Pricing</Link>
        </nav>

        {/* Right: Get Started Button */}
        <div>
          <Link
            href="/get-started"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 hidden lg:block"

          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Sidebar (for mobile nav) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
