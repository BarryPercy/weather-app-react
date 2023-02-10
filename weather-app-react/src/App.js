import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home'
import CityPage from './components/CityPage'
import NotFound from './components/NotFound'
import MyNav from './components/MyNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import cities from 'cities.json';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav/>
        <Routes>
          <Route path="/" element={<Home cities={cities}/>} />
          <Route path="/weatherreport/:country/:city/:lat/:long" element={<CityPage cities={cities}/>} />
          <Route path="*" element={<NotFound/>} />
          {/* <Route path="/favourites" element={<Favourites />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
