import React from 'react';
import Link from 'next/link'


export function MyCard({sheet}) {
  return (

    <div className='flex flex-row justify-between my-2 bg-yellow-100 rounded-xl border-2 border-green-500 p-2'>
      <div>
        <img className='min-w-36 h-32 rounded-xl' src="https://img.olhardigital.com.br/wp-content/uploads/2023/08/pokemon-anime.jpg" alt="" />
      </div>
      <div className='ml-2 space-y-4'>
        <Link className='text-red-700 font-semibold text-lg' href={'/survivors'}>{sheet.name} {sheet.codename}</Link>
        <p className='flex flex-wrap text-justify'>{sheet.author_comment}</p>
        <p className='text-gray-500'>{sheet.created_at}</p>
      </div>
      <div className='flex justify-center items-end p-2 text-cyan-50'>
        <Link className='bg-red-700 rounded-xl p-1' href={'/survivors'}>@{sheet.author.nickname}</Link>
      </div>
    </div>
  );
}