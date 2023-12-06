"use client";
import { useState, useEffect } from 'react';
import { CardList } from "../components/cardList";
import { fetcher } from "../services/fetcher";
import Pagination from "../components/pagination";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchPageData = async (pageNumber) => {
    const url = `https://bunkerapi.onrender.com/bunker/api/v1/monsters/?page=${pageNumber}`;
    const newData = await fetcher(url);
    setData(newData.results);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchPageData(pageNumber);
  };

  useEffect(() => {
    fetchPageData(1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <CardList data={data} url={"monster"} />
      <Pagination totalPages={6} currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}
