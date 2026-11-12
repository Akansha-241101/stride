import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Benefits from "./components/Benefits.jsx"
import FeaturedCollection from "./components/FeaturedCollection.jsx"
import BrandStory from "./components/BrandStory.jsx"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedCollection />
      <BrandStory />
    </div>
  )
}

export default App
