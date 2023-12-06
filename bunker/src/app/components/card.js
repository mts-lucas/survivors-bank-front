import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

  export function MyCard({ sheet, url }) {
    return (
      <div className='flex flex-row justify-start my-2 bg-yellow-100 rounded-xl border-2 border-solid border-red-100 p-2'>
        <div>
          <Image
            className='min-w-36 h-32 rounded-xl object-cover'
            src={`/assets/${url}-avatar.svg`}
            alt="cover"
            width={144}
            height={128}
          />
        </div>
        <div className='ml-2 space-y-4 flex flex-col max-w-[80%] overflow-hidden overflow-ellipsis'>
          <Link className='text-red-700 font-semibold text-4xl' href={`/${url}s/${sheet.id}`}>{sheet.name} {sheet.codename}</Link>
          <p className='flex flex-wrap text-justify text-3xl'>{sheet.author_comment}</p>
          <p className='text-gray-500'>{sheet.created_at}</p>
        </div>
      </div>
    );
  }
