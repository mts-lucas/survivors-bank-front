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
    const url = `https://bunkerapi.onrender.com/bunker/api/v1/monsters/?page=${pageNumber}&search=${searchTerm}`;
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

  const onSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm) {
      let allData = [];
      for (let i = 1; i <= totalPages; i++) { 
        const url = `https://bunkerapi.onrender.com/bunker/api/v1/monsters/?page=${i}&search=${searchTerm}`;
        const response = await fetch(url);
        const newData = await response.json();
        allData = [...allData, ...newData.results];
      }

      const filteredData = allData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setData(filteredData);
      setNoResults(filteredData.length === 0);
    } else {
      fetchPageData(currentPage, '');
    }
  };

  useEffect(() => {
    fetchPageData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Search onSearch={onSearch} />
      {noResults ? <p className="mt-4 text-white text-3xl">Not Found.</p> : <CardList data={data} url={"monster"} />}
      <div className="flex-grow" />
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} /> {}
    </div>
  );
};
