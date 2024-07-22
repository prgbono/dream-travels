import { TripsProvider } from '@/context/TripsProvider'
import Home from './components/Home'

const HomePage: React.FC = () => {
  return (
    <TripsProvider>
      <Home />
    </TripsProvider>
  )
}

export default HomePage
