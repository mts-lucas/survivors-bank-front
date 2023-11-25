import { Navbar } from "./navbar";
import { Logo } from "./image";
import { Menu } from "./menu";


export function Header(){

  return (
    <header className="bg-red-700 p-4 text-white flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className="flex flex-grow justify-center items-center flex-col ml-4">
        <h1 className="text-5xl font-bold">Survivors Bunker</h1>
        <Navbar />
      </div>
      <Menu />
    </header>
  );
}


