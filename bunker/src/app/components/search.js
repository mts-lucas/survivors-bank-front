// components/Menu.js
"use client";
import { useState } from 'react';

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com a pesquisa, por exemplo, redirecionar para uma página de resultados.
    console.log('Search submitted:', searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="border border-gray-300 px-2 py-1 mr-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-red-700 text-white px-3 py-1 rounded-md"
      >
        Search
      </button>
    </form>
  );
};


