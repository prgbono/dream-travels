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
  const [tripSelectedIdTitle, setTripSelectedIdTitle] = useState<string>()

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
    trips.find((trip) => trip.title === tripSelectedIdTitle)
  const deleteTrip = (title: string) =>
    setTrips(trips.filter((trip) => trip.title !== title))

  const addOrUpdateTrip = (trip: Trip) => {
    setTripSelectedIdTitle(trip.title)
    const tripData = getTripDataByTitle()
    if (!tripData) {
      setTrips([trip, ...trips])
    } else {
      const updatedTrips = [...trips]
      updatedTrips[tripData.id - 1] = trip
      // FIXME: This will fail while there is a duplicated id = 5 in the data
      setTrips(updatedTrips)
    }
  }

  return (
    <TripsContext.Provider
      value={{
        trips,
        isLoading,
        error,
        tripSelectedId,
        setTripSelectedId,
        tripSelectedIdTitle,
        setTripSelectedIdTitle,
        getTripDataById,
        getTripDataByTitle,
        deleteTrip,
        addOrUpdateTrip
      }}
    >
      {children}
    </TripsContext.Provider>
  )
}
