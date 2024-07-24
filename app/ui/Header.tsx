import React from 'react'
import { useTrips } from '../hooks'

type HeaderProps = {
  setIsTripFormOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<HeaderProps> = ({ setIsTripFormOpened }) => {
  const { setTripSelectedIdTitle } = useTrips()
  const handleCreateNewTrip = () => {
    setTripSelectedIdTitle('')
    setIsTripFormOpened(true)
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 m-12 bg-black rounded-[12px]">
        <div className="text-2xl font-bold text-white">Logo</div>
        <button
          className="px-4 py-2 text-black bg-white rounded-full"
          onClick={() => handleCreateNewTrip()}
        >
          Create new trip
        </button>
      </header>
    </>
  )
}
