import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="bg-cover bg-center w-full h-full absolute z-0">
        <Image 
          src='/spock-zombie.svg'  
          alt='test'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 className="text-3xl font-bold underline z-10 text-white">
        Hello World
      </h1>
    </div>
  );
}
