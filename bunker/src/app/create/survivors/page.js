'use client'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';

export default function SurvivorForm() {
  const [name, setName] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [torments, setTorments] = useState('');
  const [author_comment, setAuthorComent] = useState ('');
  const [conditions, setConditions] = useState('');
  const [conviction, setConviction] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const { data: session } = useSession();
  const backgroundImage = '/spock-zombie.svg'; 


  const handleConvictionChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value ? Math.min(12, Math.max(1, parseInt(value, 10))) : ''; 
    setConviction(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      characteristics,
      torments,
      conditions,
      conviction,
      author_comment,
    };
    
    try {

        const response = await fetch('https://bunkerapi.onrender.com/bunker/api/v1/survivors/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.accessToken}` 
        },
        body: JSON.stringify(data),
        });

    if (response.ok) {
        setStatusMessage({
          text: 'Survivor sheet saved successfully!',
          type: 'success'
        });
      } else {
        setStatusMessage({
          text: 'Failed to save survivor sheet.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error during saving survivor sheet:', error);
      setStatusMessage({
        text: 'Error saving survivor sheet.',
        type: 'error'
      });
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center justify-center min-h-screen bg-black bg-cover transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-900 via-black to-blue-900 shadow-2xl rounded-2xl px-16 pt-10 pb-12 mb-4 max-w-3xl mx-8">
        
      {statusMessage && (
          <div className={`mb-4 ${statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            <span className="text-3xl flex items-center justify-center">{statusMessage.text}</span>
          </div>
        )}
        <div className="flex items-center justify-center mb-8">
        <Image
            src="/assets/soldier7.avif" 
            width={200}
            height={200}
            alt="Picture Monster"
            style={{ borderRadius: '50%' }} 
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
            Author Comment:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" value={author_comment} onChange={(e) => setAuthorComent(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-100 text-4xl font-bold mb-2">
            Torments:
          </label>
          <textarea className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500" value={torments} onChange={(e) => setTorments(e.target.value)} />
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
          <input
            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-black text-3xl leading-tight focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-500"
            type="text"
            value={conviction}
            onChange={handleConvictionChange}
          />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-6 text-4xl rounded focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-700 mr-4" type="submit">
            Create Survivor
        </button>
            <Link href="/create">
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 text-4xl rounded focus:outline-none focus:shadow-outline focus:ring-4 focus:ring-blue-700 mr-4" type="button">
                Back
                </button>
            </Link>
            </div>
      </form>
    </div>
  );
}




