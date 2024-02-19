"use client"
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // FiX for close icon


const navigation = [
  { title: "Home", href: "/", id: 1 },
  { title: "Contact", href: "/contact", id: 2 },
  { title: "About me", href: "/about", id: 3 },
  { title: "Studio", href: "/studio", id: 4 },
];

const Navbar = () => {
  // Managing state for the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-[#533FD7] h-20 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="USAMAKEEPSCODE" className="text-[#54F3A6]" />

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FiX className="text-2xl" onClick={toggleMenu} />
          ) : (
            <FiMenu className="text-2xl" onClick={toggleMenu} />
          )}
        </div>

        {/* Nav links */}
        <div className={`sm:flex sm:flex-col sm:gap-2 md:flex md:flex-row items-center gap-7 text-[#54F3A6] ${isMenuOpen ? "" : "hidden"}`}>
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="uppercase text-sm font-semibold relative group overflow-hidden"
            >
              {item.title}
              {/* A line appearing under Nav links */}
              <span className="w-full h-[1px] bg-white absolute inline-block left-0 bottom-0 -translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
