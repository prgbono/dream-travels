import { Trip } from '../types'

const API_URL =
  'https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels'

export const fetchTrips = async (): Promise<Trip[]> => {
  const response = await fetch(API_URL)
  return response.json()
}

export const fetchTripById = async (id: string): Promise<Trip> => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}
