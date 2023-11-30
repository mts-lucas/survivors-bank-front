import React from "react"

export function MonsterSheet({sheet}) {

    return (
        <div className="bg-gray-900 border-solid border-yellow-100 border-4 rounded-3xl flex flex-col text-yellow-100">
            <div className="flex flex-row justify-around items-center">
                <div className="m-8">
                    <h1 className="font-bold text-6xl">{sheet.name}</h1>
                </div>
                <div className="m-8">
                    <img src="https://img.olhardigital.com.br/wp-content/uploads/2023/08/pokemon-anime.jpg" alt="cover" className="min-w-36 max-w-xl rounded-full"/>
                </div>
            </div>
            <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-8 m-8">
                <h1 className="font-bold text-4xl my-8">Characteristics</h1>
                <p className="text-2xl">{sheet.characteristics}</p>
            </div>
            <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-8 m-8">
                <h1 className="font-bold text-4xl my-8">Remaining Torments</h1>
                <p className="text-2xl">{sheet.remaining_torments}</p>
            </div>
            <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-8 m-8">
                <h1 className="font-bold text-4xl my-8">Conditions</h1>
                <p className="text-2xl">{sheet.conditions}</p>
            </div>         
        </div>
    )
    
}