import { Trip } from '../types'
import { API_URL } from '../utils/constants'

export const fetchTrips = async (): Promise<Trip[]> => {
  const response = await fetch(API_URL)
  return response.json()
}

export const fetchTripById = async (id: number): Promise<Trip> => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}
