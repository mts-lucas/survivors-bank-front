// components/Menu.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

export function Menu() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <div className="relative">
      <div
        className="text-white text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        ☰
      </div>
      <div
        className={`absolute top-16 right-0 bg-white p-4 shadow-md rounded-md ${
          isMenuVisible ? '' : 'hidden'
        }`}
      >z
        <ul className="list-none p-0 m-0">
          <li className="mb-2">
            <Link href="/">
              <div className="text-gray-900 text-lg">Create Account</div>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/about">
              <div className="text-gray-900 text-lg">Login</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="text-gray-900 text-lg">About</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


