import './App.css'
import Footer from './components/Footer'
import JournalHome from './components/JournalHome'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/journalhome' element={<JournalHome />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
