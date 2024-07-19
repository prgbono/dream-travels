import React from 'react'
import { Trip } from '../types'

interface TripCardProps {
  trip: Trip
}

export const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img
        src={trip.photo_url}
        alt={trip.title}
        className="object-cover w-full h-48 rounded-t-lg"
      />
      <h3 className="mt-4 text-xl font-semibold">{trip.title}</h3>
      <p className="mt-2 text-gray-600">{trip.description}</p>
    </div>

  )
}
