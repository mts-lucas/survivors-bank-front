import React from 'react';

export function MyCard() {
  return (
    <div className="p-4 items-center justify-center w-11/12 max-w-xl rounded-xl group sm:flex space-x-6 bg-yellow-100 bg-opacity-90 shadow-xl hover:rounded-2xl mx-auto">
      <img
        className="mx-auto block w-4/12 h-40 rounded-lg"
        alt="art cover"
        loading="lazy"
        src="https://picsum.photos/seed/2/2000/1000"
      />
      <div className="sm:w-8/12 pl-0">
        <div className="space-y-2 h-40 flex flex-col pr-3">
            <h4 className="text-md font-semibold text-red-700 text-justify">
              Title.
            </h4>
          <div className="flex items-center space-x-4 flex-1">
            
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                className="rounded-full h-8 w-8"
                alt="author"
              />
              <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae mollitia adipisci libero ipsam incidunt quam? Iusto sed illum placeat beatae deserunt quod aliquid, laboriosam perferendis distinctio atque nihil sunt.</span>

          </div>
          <div className="flex items-center justify-between">
           
              <p className="text-xs text-gray-500">2 hours ago</p>
              <a className='bg-red-700 p-2 text-yellow-200 text-xs rounded-xl' href="*">Ver mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}

