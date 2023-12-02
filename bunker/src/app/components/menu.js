// components/Menu.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function Menu() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuVisibility(false);
    }
  };

  const handleMenuItemClick = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
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
        className={`absolute top-16 right-0 bg-white p-10 shadow-md rounded-md ${isMenuVisible ? '' : 'hidden'}`}
      >
        <ul className="list-none p-0 m-0">
          <li className="mb-2">
            <Link href="/">
              <div
                className="menu-option bg-gray-100 hover:bg-gray-200 p-5 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <span className="text-gray-900 text-3xl p-5">Create Account</span>
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/monsters">
              <div
                className="menu-option bg-gray-100 hover:bg-gray-200 p-5 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <span className="text-gray-900 text-3xl p-5">Login</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/survivors">
              <div
                className="menu-option bg-gray-100 hover:bg-gray-200 p-5 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                <span className="text-gray-900 text-3xl p-5">About</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
