"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function HomeCreate() {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="m-5 p-10 bg-red-900 hover:bg-red-700 text-yellow-100 text-5xl font-bold text-center rounded-lg cursor-pointer" onClick={() => handleButtonClick('/create/monsters')}>
      <Image
            src="/assets/zumbie5.avif" className='rounded-lg'
            width={640}
            height={640}
            alt="Picture Monster"
          />
        <p className='p-10'>Create Monster</p>
      </div>
      <div className="m-5 p-10 bg-blue-900 hover:bg-blue-700 text-yellow-100 text-5xl font-bold text-center rounded-lg cursor-pointer" onClick={() => handleButtonClick('/create/survivors')}>
      <Image
            src="/assets/soldier7.avif" className='rounded-lg'
            width={630}
            height={630}
            alt="Picture Survivor"
          />
        <p className='p-10'>Create Survivor</p>
      </div>
    </div>
  );
}
