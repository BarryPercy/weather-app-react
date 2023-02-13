import { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { TiWeatherWindyCloudy} from 'react-icons/ti'
import { BiCrosshair } from 'react-icons/bi'
import Forecast from './Forecast'
const CityPage = (props) => {
    const params = useParams()
    const [weather,setWeather] = useState([])
    const [Temp,setTemp] = useState(0)
    const [WindSpeed, setWindSpeed] = useState('')
    const [Pressure, setPressure] = useState('')
    const [forecast,setForecast] = useState('')
    const [showForecast,setShowForecast] = useState(false)
    let nowWeatherData;
    let forecastData;
    const fetchNowWeather = async() =>{
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.long}&appid=c65cf469e7d336a791ece3136b127676`)
            if (response.ok) {
                nowWeatherData = await response.json();
                setTemp(Math.round(nowWeatherData.main.temp-273.15))
                setWeather([])
                nowWeatherData.weather.forEach(type=>{
                    setWeather(oldArray =>[...oldArray, type.description])}
                )
                setWindSpeed(nowWeatherData.wind.speed)
                setPressure(nowWeatherData.main.pressure)
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const fetchForecast = async() =>{
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.long}&appid=c65cf469e7d336a791ece3136b127676`)
            if (response.ok) {
                forecastData = await response.json();
                console.log("forecastData",forecastData)
                //setShowForecast(true)
            } else {
                alert('Error fetching results');
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchNowWeather();
        fetchForecast();
        console.log(forecastData);
        },[]);
    useEffect(() => {
        setForecast(forecastData);
        console.log("forecast in Update->",forecast)
    },[forecastData]);
    return (
        <>
        <Container className="mt-5">
            <Row>
                <Col xs={4}>
                    <h1>{params.city},{params.country}</h1>
                </Col>
                <Col xs={3}>
                    <Image className="citypageflag" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${params.country}.svg` }></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Current Weather:</h2>
                    <h5>Temp: {Temp}&deg;C, {weather}</h5>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <h6><TiWeatherWindyCloudy/>{WindSpeed}m/s W</h6>
                </Col>
                <Col xs={2}>
                    <h6><BiCrosshair/>{Pressure}hPa</h6>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h2>Forecasted Weather:</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Temperature</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {{showForecast}?<Forecast forecast={forecast.list}/>:<tr><td>Api Dying</td><td>Api Dying</td></tr>} */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default CityPage
