import React from 'react'
import { Trip } from '../types'
import Image from 'next/image'

interface TripCardProps {
  trip: Trip
}

export const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const { title, description, photo_url } = trip
  return (
    <div className="flex mx-12 my-4 overflow-hidden border border-gray-400 rounded-[20px]">
      <div className="w-[704px] h-[300px]">
        <Image
          src={photo_url}
          alt={title}
          width={464}
          height={206}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-5 text-left">
        <h2 className="text-2xl text-gray-900">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{description}</p>
        <div className="flex items-end justify-between mt-auto text-lg underline">
          <a href="#">See trip details</a>
          <div className="space-x-4">
            <button className="underline hover:text-gray-700">Edit</button>
            <button className="text-red-500 underline hover:text-red-700">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
