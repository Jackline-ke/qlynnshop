import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './NotFound';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App