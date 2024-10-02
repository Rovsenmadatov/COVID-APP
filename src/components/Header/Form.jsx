import React from 'react'
import { CiSearch } from "react-icons/ci";

const Form = ({handleSumbit}) => {
  return (
    <form className='flex items-center border rounded' onSubmit={handleSumbit} >
      <input required type="text" className='bg-transparent py-1 px-1 md:px-5 outline-none' placeholder='Ülke ismine Göre Ara' />
      <button className='p-[6px] text-xl  w-full h-full rounded transition hover:bg-green-600 bg-green-500 ' >
      <CiSearch />
      </button>
    </form>
  )
}

export default Form
