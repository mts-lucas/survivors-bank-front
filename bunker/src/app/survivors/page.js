"use client";
import { useState, useEffect } from 'react';
import { CardList } from "../components/cardList";
import Pagination from "../components/pagination";
import Search from "../components/search";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [totalPages, setTotalPages] = useState(1); 

  const fetchPageData = async (pageNumber, searchTerm) => {
    const url = `https://bunkerapi.onrender.com/bunker/api/v1/survivors/?page=${pageNumber}&s=${searchTerm}`;
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData.results);
    setNoResults(newData.results.length === 0);
    setTotalPages(Math.ceil(newData.count / 10));
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchPageData(pageNumber, searchTerm);
  };

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    fetchPageData(currentPage, searchTerm);
  };

  const onBack = () => {
    setCurrentPage(1);
    setSearchTerm('');
    fetchPageData(1, '');
  };

  useEffect(() => {
    fetchPageData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Search onSearch={onSearch} />
      {noResults ? (
        <div className="flex flex-col items-center justify-center">
          <p className="mt-4 text-white text-3xl p-10">Not Found.</p>
          <button onClick={onBack} className="mt-4 bg-red-600 hover:bg-red-700 text-yellow-100 text-3xl font-bold py-2 px-4 rounded">
            Back
          </button>
        </div>
      ) : (
        <>
          <CardList data={data} url={"survivor"} />
          {searchTerm !== '' && (
            <button onClick={onBack} className="mt-4 bg-red-600 hover:bg-red-700 text-yellow-100 text-3xl font-bold py-2 px-4 rounded">
              Back
            </button>
          )}
        </>
      )}
      <div className="flex-grow" />
      {searchTerm === '' && <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />}
    </div>
  );
};
