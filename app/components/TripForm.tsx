import { Trip } from '../types'

type TripFormProps = {
  // TODO: Optional because the form can be for creating or editting
  trip?: Trip
  setIsTripFormOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const TripForm: React.FC<TripFormProps> = ({ setIsTripFormOpened }) => {
  // TODO: Refactor this form, DRY
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        {/* <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative overflow-hidden"> */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Create a trip</h2>
          <button
            onClick={() => setIsTripFormOpened(false)}
            className="text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name*</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Italy"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Introduction (max. 240 characters)
            </label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="From Rome to Venice..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full border rounded-md p-2"
              placeholder="Discover the wonders of the Roman empire..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Image URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Day by day itinerary</label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="w-1/3 border rounded-md p-2"
                placeholder="Day"
              />
              <input
                type="text"
                className="w-2/3 border rounded-md p-2"
                placeholder="Location"
              />
            </div>
            <textarea
              className="w-full border rounded-md p-2 mt-2"
              placeholder="Description"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default TripForm
