import cities from 'cities.json';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useState } from 'react'
import City from './City'
const Home = () => {
  const [query, setQuery] = useState('')
  const [searchedCities, setSearchedCities] = useState([])
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchedCities(cities.filter((city)=>city.name===query))
    
  }
    
  return (
      <Container fluid>
        <Row>
          <Col xs={9} sm={4} className="mx-auto mt-3 mb-3">
            <Form onSubmit={handleSubmit}>
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search for a city"
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6}sm={3} className="mx-auto">
          {searchedCities.map((city) => (
             <City key={city.lat} city={city}/>
          ))}
        </Col>
        </Row>
      </Container>
  )
}

export default Home
