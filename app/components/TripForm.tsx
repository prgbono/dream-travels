import { Trip } from '../types'
import { CloseButton } from '../ui'
import Popup from '../ui/Popup'

type TripFormProps = {
  // TODO: Optional because the form can be for creating or editting
  trip?: Trip
  setIsTripFormOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const TripForm: React.FC<TripFormProps> = ({ setIsTripFormOpened }) => {
  // TODO: Refactor this form, can have inputs and divs for design-system to be standar and reused
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
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full border rounded-xl p-3"
              placeholder="Discover the wonders of the Roman empire..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="text"
              className="w-full border rounded-full p-3"
              placeholder="Image URL"
            />
          </div>
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
          >
            Save
          </button>
        </form>
      </div>
    </Popup>
  )
}

export default TripForm
