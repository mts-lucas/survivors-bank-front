// Search.js
import { useState } from 'react';

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border p-2 rounded text-2xl" />
      <button type="submit" className="bg-red-600 text-yellow-100 text-3xl px-4 py-2 rounded ml-2">Search</button>
    </form>
  );
}
