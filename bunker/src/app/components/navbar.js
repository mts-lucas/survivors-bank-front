// components/Navbar.js
import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <Link href={href}>
    <div className="text-white cursor-pointer">{text}</div>
  </Link>
);

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-xl cursor-pointer">Logo</div>
        </Link>
        <div className="flex space-x-4">
          <NavLink href="/" text="Home" />
          <NavLink href="/bunker/src/app/monsters/page.js" text="Monstros" />
          <NavLink href="/contact" text="Personagens" />
        </div>
      </div>
    </nav>
  );
};



