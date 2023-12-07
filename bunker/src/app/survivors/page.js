"use client";
import { useState, useEffect } from 'react';
import { CardList } from "../components/cardList";
import Pagination from "../components/pagination";
import Search from "../components/search";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPageData = async (pageNumber, searchTerm) => {
    const url = `https://bunkerapi.onrender.com/bunker/api/v1/survivors/?page=${pageNumber}&search=${searchTerm}`;
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData.results);
  };
  
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchPageData(pageNumber, searchTerm);
  };

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    fetchPageData(1, searchTerm);
  };

  useEffect(() => {
    fetchPageData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Search onSearch={onSearch} />
      <CardList data={data} url={"survivor"} />
      <Pagination totalPages={6} currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}
