import React from 'react'

export const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 m-12 bg-black rounded-[12px]">
        <div className="text-2xl font-bold text-white">Logo</div>
        <button className="px-4 py-2 text-black bg-white rounded-full">
          Create new trip
        </button>
      </header>
    </>
  )
}
