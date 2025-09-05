import { useState } from 'react'
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Sidebar />

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* default page */}
        <Route path="/about" element={<About />} /> {/* about page */}
        <Route path="/contact" element={<Contact />} /> {/* contact page */}
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> fallback */}
      </Routes>
    </>
  )
}

export default App
