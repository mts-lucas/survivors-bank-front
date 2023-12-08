import React from "react";
import { MyCard } from "./card";

export function CardList({ data, url }) {
  return(
    <div className="flex flex-col justify-center w-9/12 m-auto">
      {data && data.map(sheet => <MyCard key={sheet.id} sheet={sheet} url={url} />)}
    </div>
  );
}
