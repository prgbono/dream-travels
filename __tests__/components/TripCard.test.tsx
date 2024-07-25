import { render } from '@testing-library/react'
import { TripCard } from '@/app/components'
import { Trip } from '@/app/types/'

const trip: Trip = {
  id: 6,
  title: 'Trip to Slovenia',
  description:
    'Embark on a picturesque journey to Slovenia, where the charming streets of Ljubljana enchant, the emerald waters of Lake Bled captivate, and the flavors of Slovenian cuisine delight your taste buds. From the medieval charm of Škofja Loka to the majestic Triglav National Park, Slovenia invites you to explore its diverse landscapes and embrace the warmth of its rich cultural heritage.',
  photo_url:
    'https://miro.medium.com/v2/resize:fit:1400/1*h_nQx6iZZ3wUe-RTgzlMjw.jpeg',
  status: 'done',
  itinerary: [
    {
      day: 1,
      location: 'Ljubljana',
      description:
        'Stroll through the historic streets of Ljubljana, visit Ljubljana Castle, and indulge in local delicacies at the Central Market.'
    },
    {
      day: 2,
      location: 'Bled',
      description:
        'Experience the magic of Lake Bled, take a traditional pletna boat to Bled Island, and hike to Bled Castle for panoramic views.'
    },
    {
      day: 3,
      location: 'Škofja Loka',
      description:
        'Explore the medieval town of Škofja Loka, wander through its charming old town, and visit the Škofja Loka Castle.'
    }
  ]
}

describe('Testing <TripCard>', () => {
  test('renders TripCard with correct data', () => {
    const { getByText } = render(
      <TripCard
        trip={trip}
        setIsTripDetailsOpened={jest.fn()}
        setIsTripFormOpened={jest.fn()}
      />
    )

    expect(getByText('Trip to Slovenia')).toBeInTheDocument()
    expect(
      getByText(
        'Embark on a picturesque journey to Slovenia, where the charming streets of Ljubljana enchant, the emerald waters of Lake Bled captivate, and the flavors of Slovenian cuisine delight your taste buds. From the medieval charm of Škofja Loka to the majestic Triglav National Park, Slovenia invites you to explore its diverse landscapes and embrace the warmth of its rich cultural heritage'
      )
    ).toBeInTheDocument()
  })
})
