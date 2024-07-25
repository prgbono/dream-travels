export type Trip = {
  id: number
  title: string
  description: string
  introduction?: string
  photo_url: string
  status: status
  itinerary: Itinerary[]
}

type Itinerary = {
  day: number
  location: string
  description: string
}

type status = 'todo' | 'done'
