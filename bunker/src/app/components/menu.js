// components/Menu.js
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function Menu() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="text-white text-5xl cursor-pointer"
        onClick={toggleMenu}
      >
        ☰
      </div>
      <div
        className={`absolute top-16 right-0 bg-gray-800 p-4 shadow-md rounded-md ${isMenuVisible ? '' : 'hidden'}`}
      >
    <ul className="list-none p-0 m-0 space-y-2">
  <li>
    <Link href="/">
      <p className="text-white text-3xl transition-colors duration-300 hover:underline hover:text-blue-500">Create Account</p>
    </Link>
  </li>
  <li>
    <Link href="/about">
      <p className="text-white text-3xl transition-colors duration-300 hover:underline hover:text-blue-500">Login</p>
    </Link>
  </li>
  <li>
    <Link href="/contact">
      <p className="text-white text-3xl transition-colors duration-300 hover:underline hover:text-blue-500">About</p>
    </Link>
  </li>
</ul>

      </div>
    </div>
  );
}
