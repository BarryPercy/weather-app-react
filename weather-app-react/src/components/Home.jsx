import { Container, Row, Col, Form, Image, Table} from 'react-bootstrap'
import { useState } from 'react'
import City from './City'
const Home = (props) => {
  const [query, setQuery] = useState('')
  const [searchedCities, setSearchedCities] = useState([])
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchedCities(props.cities.filter((city)=>city.name.toLowerCase()===query.toLowerCase()))
    
  }
    
  return (
      <>
        <Image className="top-image" src="https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-white-cloud-on-blue-sky-weather-background-image_410050.jpg"/>
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
              <Col xs={9}sm={6} md={6} className="mx-auto">
                {searchedCities.map((city) => (
                  <City key={city.lat} city={city}/>
                ))}
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Home
