import React from 'react'
import { TripCard } from './TripCard'
import { Trip } from '../types'

interface TripListProps {
  trips: Trip[]
}

export const TripList: React.FC<TripListProps> = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  )
}
