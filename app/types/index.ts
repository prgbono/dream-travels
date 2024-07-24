export type Trip = {
  id: number
  title: string
  description: string
  introduction?: string
  photo_url: string
  status: string
  itinerary: Itinerary[]
}

type Itinerary = {
  day: number
  location: string
  description: string
}
