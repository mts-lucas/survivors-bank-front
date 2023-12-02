'use client';

import React from "react";
import { SurvivorSheet } from "./components/survivor_sheet";
import Pagination from "../../components/pagination";
import axios from 'axios';
import useSWR from 'swr';



export default function survivorPageID({params}) {
  const {data, error} = useSWR('https:bunkerapi.onrender.com/bunker/api/v1/survivors/');
  if (error) return <div className="text-white">falha na requisição...</div>

  if (!data) return <div className="text-white">carregando...</div>
  console.log(data);


    return (

    <div className="flex items-center justify-center h-screen relative">
      <SurvivorSheet sheet={data} ></SurvivorSheet>
    </div>
    
    );
}

async function fetcher(url) {

  const res = await fetch(url);
  const json = await res.json();

  return json;

}