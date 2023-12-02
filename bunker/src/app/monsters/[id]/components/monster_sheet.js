import React from "react";

export function MonsterSheet({ sheet }) {
  return (
    <div className="bg-gray-900 border-solid border-yellow-100 border-4 rounded-3xl flex flex-col text-yellow-100 p-4 md:p-8 mt-8 mb-16 max-w-screen-xl mx-auto w-11/12">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="mb-4 md:m-8">
          <h1 className="font-bold text-4xl md:text-6xl text-red-500">{sheet.name}</h1>
        </div>
        <div className="mb-4 md:m-8">
          <img
            src="https://img.olhardigital.com.br/wp-content/uploads/2023/08/pokemon-anime.jpg"
            alt="cover"
            className="w-full md:min-w-36 md:max-w-xl rounded-xl border-2 p-2 border-red-500 "
          />
        </div>
      </div>
      <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
        <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-red-500">Characteristics</h1>
        <p className="text-lg md:text-2xl">{sheet.characteristics}</p>
      </div>
      <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
        <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-red-500">Remaining Torments</h1>
        <p className="text-lg md:text-2xl">{sheet.remaining_torments}</p>
      </div>
      <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
        <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-red-500">Conditions</h1>
        <p className="text-lg md:text-2xl">{sheet.conditions}</p>
      </div>
    </div>
  );
}
