import { Navbar } from "./navbar";
import { Logo } from "./image";



export function Header(){

  return (
    <header className="bg-red-700 p-4 text-white flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className="flex flex-grow justify-center items-center flex-col">
        <h1 className="text-2xl font-bold ml-4">Survivors Bunker</h1>
        <Navbar />
      </div>
    </header>
  );
}


