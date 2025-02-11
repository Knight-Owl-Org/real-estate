import { useState } from 'react'
import './App.css'
import PerfectHome from './assets/pages/PerfectHome'
import Listing from './assets/pages/Listing'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <section className="page">
        <PerfectHome />
      </section>
      <section className="page">
        <Listing />
      </section>
    </div>
  )
}

export default App
