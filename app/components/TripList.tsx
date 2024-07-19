import React from 'react'
import { TripCard } from './TripCard'
import { Trip } from '../types'

interface TripListProps {
  trips: Trip[]
}

export const TripList: React.FC<TripListProps> = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  )
}
