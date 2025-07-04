import React from 'react'
import Landing from './pages/Landing'
import Order from './pages/Order'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen" >
      {/* Home / Landing Section */}
      <section id="home" className="bg-[#f8f8f6]">
        <Landing />
      </section>

      <section id="order" className="bg-[#f8f8f6]">
        <Order />
      </section>

      
    </div>
  )
}

export default App