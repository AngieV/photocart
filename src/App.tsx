import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Galleries } from './pages/Galleries'
import { Navbar } from './components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='bg-gradient-to-b from-blue-500'>
        <img src="src/assets/shutter-icon.png" className="logo w-28 h-auto m-auto" alt="shutter logo" />
        <h1 className="font-bold text-6xl pb-8 text-center">photoCart</h1>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>  */}
      <footer className="text-xs text-lt text-center py-8 mt-12">
        Images ©FocalPointe Photography, Belleville, IL • All Rights Reserved
      </footer>
    </div>
  )
}

export default App
