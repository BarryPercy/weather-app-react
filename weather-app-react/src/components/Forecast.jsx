import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Forecast = (props) => {
  return (
    props.forecast.map((weather)=>{
        <tr>
            <td>{weather.dt_txt}</td>
            <td>{weather.main.temp}</td>
        </tr>
    })
  )
}
export default Forecast