import React from "react";
import { MyCard } from "./card";

export function CardList({dados}){

    return(
        <div className="border-2 border-black  flex flex-col justify-center w-9/12 m-auto">
            <MyCard sheet={dados}/>
            <MyCard sheet={dados}/>
            <MyCard sheet={dados}/>
        </div>
    );
    
}
