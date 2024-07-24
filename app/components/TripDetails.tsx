import Image from 'next/image'
import { Trip } from '../types'
import { useEffect, useState } from 'react'
import { useTrips } from '../hooks'

interface TripDetailsProps {
  // tripTitle: number, //FIXME: There is a duplicate of id=5
  tripTitle: string
  setIsTripDetailsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

// In case we need more detailed data from a trip, a call to api were needed (and <Suspense />)
// const getTripData = async (id: number) => {
//   return await fetchTripById(id)
// }

export const TripDetails: React.FC<TripDetailsProps> = ({
  tripTitle,
  setIsTripDetailsOpened
}) => {
  const { getTripDataByTitle } = useTrips()
  const [trip, setTrip] = useState<Trip>()
  useEffect(() => {
    setTrip(getTripDataByTitle())
  }, [getTripDataByTitle])

  return !trip || Object.keys(trip).length === 0 ? (
    <h1>we do not have that trip... so far!</h1>
  ) : (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative overflow-hidden">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
          onClick={() => setIsTripDetailsOpened(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <Image
          src={trip.photo_url}
          alt={trip.title}
          width={464}
          height={206}
          className="object-cover w-full h-full"
          priority={false}
        />

        <div className="p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{trip.title}</h1>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-sm">Mark as completed</span>
            </label>
          </div>

          <p className="mt-4 text-gray-600">{trip.description}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Itinerary</h2>
            <ul className="space-y-4">
              {trip.itinerary.map((itineraryItem) => (
                <li key={itineraryItem.day} className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Day {`${itineraryItem.day} ${itineraryItem.location}`}
                    </h3>
                    <p className="text-gray-600">
                      {`${itineraryItem.description}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}