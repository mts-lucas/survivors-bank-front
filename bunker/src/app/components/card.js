import React from 'react';

export function MyCard() {
  return (
    <div className="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-yellow-100 bg-opacity-90 shadow-xl hover:rounded-2xl">
      <img
        className="mx-auto w-full block w-4/12 h-40 rounded-lg"
        alt="art cover"
        loading="lazy"
        src="https://picsum.photos/seed/2/2000/1000"
      />
      <div className="sm:w-8/12 pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-cyan-900 text-justify">
              Title.
            </h4>
          </div>
          <div className="flex items-center space-x-4 justify-between">
            <div className="flex gap-3 space-y-1">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                className="rounded-full h-8 w-8"
                alt="author"
              />
              <span className="text-sm">Author comment edfhdfkjhdfiehfuiefhi</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 justify-between">
            <div className="text-grey-500 flex flex-row space-x-1 my-4">
              <p className="text-xs">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

