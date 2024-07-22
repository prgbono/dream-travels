'use client'
import React, { useState, useEffect } from 'react'
import { Footer, Header } from './ui'
import { TripList } from './components'
import { fetchTrips } from './api'
import { Trip } from './types'
import { NAVBAR_BUTTONS_TEXT } from './utils/constants'
import NavBar from './ui/NavBar'

const HomePage: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([])
  const [filter, setFilter] = useState<string>('')

import Image from "next/image";

export default function Home() {

  useEffect(() => {
    fetchTrips().then(setTrips)
  }, [])

  const filteredTrips = trips.filter(
    (trip) =>
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
        <TripList trips={filteredTrips} />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default HomePage
