import React from 'react'
import { render } from '@testing-library/react'
import { TripDetails } from '@/app/components'
import { Trip } from '@/app/types'

const itinerary = [
  {
    day: 1,
    location: 'Versalles',
    description: 'Palace of Versalles'
  },
  {
    day: 2,
    location: 'MontMartre',
    description: 'Montmartre neighborhood'
  }
]

const trip: Trip = {
  id: 1,
  title: 'Trip to Paris',
  description: 'A beautiful trip to Paris.',
  photo_url: '/images/paris.jpg',
  status: 'todo',
  itinerary
}

describe('Testing <TripDetails>', () => {
  test('renders TripDetails with correct data', () => {
    const { getByText } = render(
      <TripDetails
        setIsTripDetailsOpened={jest.fn()}
        tripTitle={'Trip to Paris'}
      />
    )
    expect(getByText('Trip to Paris')).toBeInTheDocument()
    expect(getByText('A beautiful trip to Paris.')).toBeInTheDocument()
    expect(getByText('Day 1: Visit the Eiffel Tower')).toBeInTheDocument()
    expect(getByText('Day 2: Louvre Museum')).toBeInTheDocument()
  })
})
