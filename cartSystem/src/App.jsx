import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
