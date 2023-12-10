"use client";
import { useRouter } from 'next/navigation';

export default function HomeCreate() {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        onClick={() => handleButtonClick('/create/monsters')}
      >
        Create Monsters
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        onClick={() => handleButtonClick('/create/survivors')}
      >
        Create Survivors
      </button>
    </div>
  );
}
