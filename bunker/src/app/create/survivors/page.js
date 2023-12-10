'use client'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';

export default function SurvivorForm() {
  const [name, setName] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [remaining_torments, setRemainingTorments] = useState('');
  const [conditions, setConditions] = useState('');
  const [conviction, setConviction] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const { data: session } = useSession();
  const backgroundImage = '/spock-zombie.svg'; 
  const logoImage = '/assets/monstro2.png';

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      characteristics,
      remaining_torments,
      conditions,
      conviction,
    };
    
    try {

      const response = await fetch('https://bunkerapi.onrender.com/bunker/api/v1/survivors/', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.acessToken}` 
      },
      body: JSON.stringify(data),
    });

      if (response.ok) {
        setStatusMessage('Ficha de monstro salva com sucesso!');
      } else {
        setStatusMessage('Falha ao salvar a ficha de monstro.');
      }
    } catch (error) {
      console.error('Error during saving monster sheet:', error);
      setStatusMessage('Erro durante a gravação da ficha de monstro.');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center justify-center min-h-screen bg-black bg-cover transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-900 via-black to-blue-900 shadow-2xl rounded-2xl px-16 pt-10 pb-12 mb-4 max-w-3xl mx-8">
        
        {statusMessage && (
          <div className="mb-4">
            <span className="text-black">{statusMessage}</span>
          </div>
        )}
        <div className="flex items-center justify-center mb-8">
        <Image
            src="/assets/survivor-original.png" className='rounded-full'
            width={200}
            height={200}
            alt="Picture Monster"
          />
          <h1 className="text-4xl p-3 font-bold text-center text-yellow-100 transition-all duration-500 ease-in-out">Create Your Survivor!</h1>
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Name:
          </label>
          <input className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Characteristics:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" value={characteristics} onChange={(e) => setCharacteristics(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Torments:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" value={remaining_torments} onChange={(e) => setRemainingTorments(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
           Conditions:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" value={conditions} onChange={(e) => setConditions(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Conviction:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" value={conviction} onChange={(e) => setConviction(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-6 text-4xl rounded focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500 mr-4" type="submit">
            Create Survivor
        </button>
            <Link href="/create">
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 text-4xl rounded focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-red-500 mr-4" type="button">
                Back
                </button>
            </Link>
            </div>
      </form>
    </div>
  );
}




