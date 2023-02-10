import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const City = (props) => {
  console.log(props.city)
  return (
    <>
      <Row
        className="p-1"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={12} className="city-parent">
          <Link to={`/cities/${props.city.lat}/${props.city.lng}`}>{props.city.name}, {props.city.country}</Link>
          <p className='latlong'>{props.city.lat}, {props.city.lng}</p>
          <Image src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.city.country}.svg`} className="flag"></Image>
        </Col>
      </Row>
    </>
  )
}

export default City
