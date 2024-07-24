import { useState } from 'react'
import { Trip } from '../types'
import { CloseButton, Popup } from '../ui'
import { useTrips } from '../hooks'

type TripFormProps = {
  trip?: Trip
  setIsTripFormOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const TripForm: React.FC<TripFormProps> = ({ trip, setIsTripFormOpened }) => {
  // TODO: React Hook Form
  const [tripName, setTripName] = useState(trip ? trip.title : '')
  const [tripIntro, setTripIntro] = useState(trip ? trip.introduction : '')
  const [tripDescription, setTripDescription] = useState(
    trip ? trip.description : ''
  )
  const [tripImage, setTripImage] = useState(trip ? trip.photo_url : '')
  const { addOrUpdateTrip } = useTrips()

  const handleSaveTrip = () => {
    const newTrip: Trip = {
      id: trip ? trip.id : Math.floor(Math.random() * 1000000),
      title: tripName,
      description: tripDescription,
      introduction: tripIntro,
      photo_url: tripImage,
      status: 'todo',
      // TODO:
      itinerary: []
    }
    addOrUpdateTrip(newTrip)
    setIsTripFormOpened(false)
  }

  return (
    <Popup>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl">Create a trip</h2>
          <button
            onClick={() => setIsTripFormOpened(false)}
            className="text-black text-2xl"
          >
            <CloseButton />
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name*</label>
            <input
              type="text"
              className="w-full border rounded-full p-3"
              placeholder="Italy"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Introduction (max. 240 characters)
            </label>
            <input
              type="text"
              className="w-full border rounded-xl p-3"
              placeholder="From Rome to Venice..."
              value={tripIntro}
              onChange={(e) => setTripIntro(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full border rounded-xl p-3"
              placeholder="Discover the wonders of the Roman empire..."
              value={tripDescription}
              onChange={(e) => setTripDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="text"
              className="w-full border rounded-full p-3"
              placeholder="Image URL"
              value={tripImage}
              onChange={(e) => setTripImage(e.target.value)}
            />
          </div>
          {/*  TODO: Itenerary */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-4">
              Day by day itinerary
            </label>
            <div className="bg-gray-100 p-4 rounded-xl">
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="w-1/3 border rounded-full p-3"
                  placeholder="Day"
                />
                <input
                  type="text"
                  className="w-2/3 border rounded-full p-3"
                  placeholder="Location"
                />
              </div>
              <textarea
                className="w-full border mt-2 rounded-xl p-3"
                placeholder="Description"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-auto bg-black text-white py-3 px-16 rounded-full"
            onClick={() => {
              handleSaveTrip()
            }}
          >
            Save
          </button>
        </form>
      </div>
    </Popup>
  )
}

export default TripForm
