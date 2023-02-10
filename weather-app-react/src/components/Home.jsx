import MyNav from './MyNav'
import { fs, path, require} from 'all-the-cities'

const Home = () => {
    const cities = require('all-the-cities');
    let cityData=cities.filter(city => city.name.match('Albuquerque'));
    console.log(cityData)
  return (
    <>

    </>
  )
}

export default Home
