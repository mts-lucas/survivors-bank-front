'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Menu() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const menuRef = useRef(null);
  const { data: session } = useSession(); // Obter informações da sessão

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
        className="text-white text-5xl cursor-pointer transition duration-300 transform hover:scale-110"
        onClick={toggleMenu}
      >
        ☰
      </div>
      <div
        className={`absolute top-16 right-0 bg-gray-800 p-10 shadow-md rounded-md overflow-hidden ${isMenuVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 invisible'} transition-transform transform origin-top-right ease-in-out duration-300`}
      >
        <div className="flex items-center mb-4">
          <Image
            src="/logo2.png"
            width={100}
            height={100}
            alt="Menu Icon"
            className="h-8 w-8 rounded-full mr-2"
          />
          <span className="text-white text-xl font-semibold">Bem-vindo {session?.user?.nickname}</span>
        </div>

        <ul className="list-none p-0 m-0">
          {!session && (
            <li className="mb-2">
              <Link href="/auth/register">
                <div onClick={handleMenuItemClick}>
                  <span className="text-white text-3xl font-semibold hover:text-blue-500 transition duration-300 block py-5 px-10 bg-gray-700 rounded-md">Create Account</span>
                </div>
              </Link>
            </li>
          )}
          <li className="mb-2">
            {session ? (
              <button onClick={() => signOut()}>
                <span className="text-white text-3xl font-semibold hover:text-blue-500 transition duration-300 block py-5 px-10 bg-gray-700 rounded-md">Logout</span>
              </button>
            ) : (
                <button onClick={() => signIn()}>
                  <span className="text-white text-3xl font-semibold hover:text-blue-500 transition duration-300 block py-5 px-10 bg-gray-700 rounded-md">Login</span>
                </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
