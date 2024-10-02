import React from 'react'

const Loader = ({ type }) => {

  if (type === "header") return (
    <div data-testid="header-loader" className='flex items-center space-x-2 animate-pulse' >
      <div className='w-24 h-[64px] bg-gray-400 ' />
      <div className='w-[180px] h-[36px] bg-gray-400 rounded-md ' />
    </div>
  );


  const arr = new Array(16).fill()


  return (arr.map(() =>


    <div data-testid="card-loader" className="bg-gray-300 p-4 rounded-lg shadow-md select-none text-transparent animate-pulse ">
      <p className="bg-gray-400 rounded-md  w-2/5 text-sm font-semibold mb-2 capitalize">&nbps;</p>
      <h2 className="bg-gray-500 rounded-md w-3/4 text-lg font-bold">&nbps;</h2>
    </div>

  ))
}

export default Loader

