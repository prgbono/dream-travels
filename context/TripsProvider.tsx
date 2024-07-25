'use client'
import { fetchTrips } from '@/app/api'
import { TripsContext } from './TripsContext'
import { useEffect, useState } from 'react'
import { Trip } from '@/app/types'

export const TripsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [trips, setTrips] = useState<Trip[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [tripSelectedId, setTripSelectedId] = useState<number>()
  const [tripSelectedTitle, setTripSelectedTitle] = useState<string>()

  useEffect(() => {
    fetchTrips()
      .then((result) => {
        setTrips(result)
        setIsLoading(false)
      })
      .catch((err) => {
        setError('There was an error while fetching...')
        setIsLoading(false)
      })
  }, [])

  const getTripDataById = () => trips.find((trip) => trip.id === tripSelectedId)
  const getTripDataByTitle = () =>
    trips.find((trip) => trip.title === tripSelectedTitle)
  const deleteTrip = (title: string) =>
    setTrips(trips.filter((trip) => trip.title !== title))

  const addOrUpdateTrip = (newTrip: Trip) => {
    setTripSelectedTitle(newTrip.title)
    const tripData = getTripDataByTitle()
    if (!tripData) {
      setTrips([newTrip, ...trips])
    } else {
      const updatedTrips = [...trips]
      updatedTrips[tripData.id - 1] = newTrip
      // FIXME: This will fail while there is a duplicated id = 5 in the data
      setTrips(updatedTrips)
    }
  }

  const updateTripStatus = (title: string, newStatus: boolean) => {
    // setTrips(
    trips.map((trip) =>
      trip.title === title ? { ...trip, status: newStatus } : trip
    )
    // )
  }

  return (
    <TripsContext.Provider
      value={{
        trips,
        isLoading,
        error,
        tripSelectedId,
        setTripSelectedId,
        tripSelectedTitle,
        setTripSelectedTitle,
        getTripDataById,
        getTripDataByTitle,
        deleteTrip,
        addOrUpdateTrip,
        updateTripStatus
      }}
    >
      {children}
    </TripsContext.Provider>
  )
}
