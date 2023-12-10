'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { nextAuthOptions } from '../../utils/authOptions';

export default function MonsterForm() {
  const [name, setName] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [remaining_torments, setRemainingTorments] = useState('');
  const [conditions, setConditions] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const { data: session } = useSession();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      characteristics,
      remaining_torments,
      conditions,
    };

    try {
      const response = await fetch('https://bunkerapi.onrender.com/bunker/api/v1/monsters/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
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
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {statusMessage && (
          <div className="mb-4">
            <span className="text-green-500">{statusMessage}</span>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Características:
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={characteristics} onChange={(e) => setCharacteristics(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tormentos Restantes:
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={remaining_torments} onChange={(e) => setRemainingTorments(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Condições:
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={conditions} onChange={(e) => setConditions(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
