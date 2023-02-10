import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home'
import City from './components/City'
import MyNav from './components/MyNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <MyNav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cities/:lat/:long" element={<CityPage/>} />
          {/* <Route path="/favourites" element={<Favourites />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
