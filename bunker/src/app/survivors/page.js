"use client";
import { useState, useEffect } from 'react';
import { CardList } from "../components/cardList";
import { fetcher } from "../services/fetcher";
import Pagination from "../components/pagination";
import Search from "../components/search";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const fetchAllData = async () => {
    let allData = [];
    for (let i = 1; i <= 6; i++) {
      const url = `https://bunkerapi.onrender.com/bunker/api/v1/survivors/?page=${i}`;
      const newData = await fetcher(url);
      allData = [...allData, ...newData.results];
    }
    setAllData(allData);
    setData(allData.slice(0, 10));
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setData((isSearching ? searchResults : allData).slice((pageNumber - 1) * 10, pageNumber * 10));
  };

  const handleSearch = (results) => {
    setSearchResults(results);
    setIsSearching(true);
    setCurrentPage(1);
    setData(results.slice(0, 10));
  };

  const resetSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
    setData(allData.slice(0, 10));
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const totalPages = Math.ceil((isSearching ? searchResults.length : allData.length) / 10);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Search data={allData} onSearch={handleSearch} />
      {data.length === 0 && (
        <p className='text-5xl text-white flex items-center p-10'>
          No results found.
        </p>
      )}
      {data.length > 0 && (
        <>
          <CardList data={data} url={"survivor"} />
          {totalPages > 1 && (
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
          )}
        </>
      )}
    </div>
  );
}
