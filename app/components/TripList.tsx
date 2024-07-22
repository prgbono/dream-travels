import React from 'react'
import { TripCard } from './TripCard'
import { Trip } from '../types'

interface TripListProps {
  trips: Trip[]
  setIsTripDetailsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const TripList: React.FC<TripListProps> = ({
  trips,
  setIsTripDetailsOpened
}) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      {trips.map((trip) => (
        // Using randomUUID because there is a duplicity of id=5 in api
        <TripCard
          key={`${trip.id}${self.crypto.randomUUID()}`}
          trip={trip}
          setIsTripDetailsOpened={setIsTripDetailsOpened}
        />
      ))}
    </div>
  )
}
