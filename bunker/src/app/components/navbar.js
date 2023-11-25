// components/Navbar.js
"use client";
import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <Link href={href}>
    <div className="text-white text-xl px-4 py-2 hover:bg-gray-700 hover:rounded-lg transition-colors duration-100">
      {text}
    </div>
  </Link>
);

export function Navbar(){
  return (
    <nav className="bg-red-600 w-full p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="Monsters" />
          <NavLink href="/contact" text="Survivors" />
        </div>
      </div>
    </nav>
  );
};
