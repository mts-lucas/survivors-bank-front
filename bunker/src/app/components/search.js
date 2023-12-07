import { useState } from 'react';

export default function Search({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const results = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    onSearch(results);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border p-2 rounded text-2xl" />
      <button onClick={handleSearch} className="bg-red-600 text-yellow-100 text-3xl px-4 py-2 rounded ml-2">Search</button>
    </div>
  );
}
