import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <Link href={href}>
    <div className="text-white px-3 py-2 rounded-md bg-red-500 hover:bg-gray-900 text-4xl">
      {text}
    </div>
  </Link>
);

export function Navbar() {
  return (
    <nav className="bg-your-header-color p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <div className="text-white text-3xl cursor-pointer"></div>
      </Link>
      <div className="flex space-x-4">
        <NavLink href="/" text="Home"/>
        <NavLink href="/about" text="Monstros" />
        <NavLink href="/contact" text="Personagens" />
      </div>
    </div>
  </nav>
);
};



