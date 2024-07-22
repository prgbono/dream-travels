import { TripsContext } from '@/context/TripsContext'
import { useContext } from 'react'

export const useTrips = () => useContext(TripsContext)
