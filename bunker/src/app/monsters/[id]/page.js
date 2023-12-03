import React from "react";
import { MonsterSheet } from "./components/monster_sheet";
import { getAllMonsters } from "../../services/get-all-monsters"
import { fetcher } from "../../services/fetcher"


export async function generateStaticParams() {
  const sheets = await getAllMonsters();
 
  return sheets.map((sheet) => ({
    id: sheet.id.toString(),
  }));
}

export default async function monsterPageID({params}) {

    const data = await fetcher(`https://bunkerapi.onrender.com/bunker/api/v1/monsters/${params.id}`) 

    if (!data) return <div className="text-white font-bold">Carregando...</div>

    if (data.Error) return <div className="text-white font-bold">Erro</div>

    return (

    <div className="flex items-center justify-center h-screen">
      <MonsterSheet sheet={data} ></MonsterSheet>
    </div>
    
    );
    
}