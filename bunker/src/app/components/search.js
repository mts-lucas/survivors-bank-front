import { useState } from 'react';

export default function Search({ onSearch }) {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(term.toLowerCase());
  };

  return (
    <form onSubmit={onSubmit} className="flex justify-center items-center">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-red-600 text-yellow-200 text-2xl rounded-md">Search</button>
    </form>
  );
}