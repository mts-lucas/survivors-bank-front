import React from "react";
import { SurvivorSheet } from "./components/survivor_sheet";
import { getAllSurvivors } from "../../services/get-all-survivors"
import { fetcher } from "../../services/fetcher"


export async function generateStaticParams() {
  const sheets = await getAllSurvivors();
 
  return sheets.map((sheet) => ({
    id: sheet.id.toString(),
  }));
}

export default async function survivorPageID({params}) {

    const { id } = params.id

    const data = await fetcher(`https://bunkerapi.onrender.com/bunker/api/v1/survivors/${params.id}`) 

    if (!data) return <div className="text-white font-bold">Carregando...</div>

    if (data.Error) return <div className="text-white font-bold">Erro</div>

    return (

    <div className="flex items-center justify-center h-screen">
      <SurvivorSheet sheet={data} ></SurvivorSheet>
    </div>
    
    );
    
}