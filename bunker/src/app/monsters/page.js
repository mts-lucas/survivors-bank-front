"use client";
import { useState, useEffect } from 'react';
import { CardList } from "../components/cardList";
import Pagination from "../components/pagination";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchPageData = async (pageNumber) => {
    const url = `https://bunkerapi.onrender.com/bunker/api/v1/monsters/?page=${pageNumber}&search=${searchTerm}`;
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData.results);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchPageData(pageNumber);
  };

  const onSearch = () => {
    fetchPageData(currentPage);
  };

  useEffect(() => {
    fetchPageData(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />
      <button onClick={onSearch}>Search</button>
      <CardList data={data} url={"monster"} />
      <Pagination totalPages={6} currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}
