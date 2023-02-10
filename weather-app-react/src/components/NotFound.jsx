import { Container, Row, Col} from 'react-bootstrap'

const NotFound = (props) => {
  return (
    <Container fluid>
        <Row>
            <Col xs={12}>
                <h1>404</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default NotFound
