import React from "react";
import Image from 'next/image'

export function MonsterSheet({ sheet }) {
  return (
    <div className="bg-red-800 border-solid border-yellow-100 border-4 rounded-3xl flex flex-col text-yellow-100 p-4 md:p-8 mt-8 mb-16 max-w-screen-xl mx-auto overflow-y-auto">
      <div className="container mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-4 md:m-8">
            <h1 className="font-bold text-4xl md:text-6xl text-yellow-100">{sheet.name} {sheet.nickname}</h1>
          </div>
          <div className="mb-4 md:m-8">
            <Image
              src="/assets/monster-avatar.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full md:min-w-36 md:max-w-xl rounded-xl border-2 p-2 border-yellow-100"
            />
          </div>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100">Characteristics</h1>
          <p className="text-lg md:text-2xl text-yellow-100">{sheet.characteristics}</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100">Torments</h1>
          <p className="text-lg md:text-2xl text-yellow-100">{sheet.remaining_torments}</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100">Conditions</h1>
          <p className="text-lg md:text-2xl text-yellow-100">{sheet.conditions}</p>
        </div>
      </div>
    </div>
  );
}
