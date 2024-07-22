'use client'
import { useTrips } from '../hooks'
import React, { useState } from 'react'
import { Footer, Header } from '../ui'
import NavBar from '../ui/NavBar'
import { TripList } from './TripList'
import { TripDetails } from './TripDetails'
import { NAVBAR_BUTTONS_TEXT } from '../utils/constants'
import { Trip } from '../types'

const Home: React.FC = () => {
  const [filter, setFilter] = useState<string>('')
  const [isTripDetailsOpened, setIsTripDetailsOpened] = useState<boolean>(false)
  const { trips, isLoading, error, tripSelected, tripSelectedIdTitle } =
    useTrips()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>There was an error fetching data...</div>

  const filteredTrips = trips.filter(
    (trip: Trip) =>
      trip.title.toLowerCase().includes(filter.toLowerCase()) ||
      trip.description.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 text-center">
        <div className="mb-4 text-center">
          <h1 className="mb-4 text-4xl">The places you dream of</h1>
          <p className="text-2xl text-gray-600">Let’s live new adventures</p>
        </div>

        <div className="relative w-full max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search trips"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-4 border rounded-full"
          />
          <button className="absolute px-4 py-2 text-white transform -translate-y-1/2 bg-black rounded-full right-2 top-1/2">
            Search
          </button>
        </div>

        <nav className="flex justify-center mb-12">
          <NavBar buttonsText={NAVBAR_BUTTONS_TEXT} />
        </nav>
        <TripList
          trips={filteredTrips}
          setIsTripDetailsOpened={setIsTripDetailsOpened}
        />
      </main>
      <Footer />

      {isTripDetailsOpened && (
        <TripDetails
          // tripId={tripSelected} FIXME: There is a duplicated id=5
          tripTitle={tripSelectedIdTitle}
          setIsTripDetailsOpened={setIsTripDetailsOpened}
        />
      )}
    </>
  )
}

export default Home
