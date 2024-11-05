import { Col, Container, Image, Row } from "react-bootstrap"
import './ContactPage.css'

const ContactPage = () => {

   // const position = { lat: 28.111118613039366, long: -15.561901566855436 }

    return (
        <Container className="ContactPage">
            <Row className="ContactRow Title">
                <Col>TAEKION FIRGAS</Col>
            </Row>
            <Row className="ContactRow">
                <Col>  Miguel Ángel Santiago Ruiz  </Col>
            </Row>
            <Row className="ContactRow">
                <Col>  +34 620389466  </Col>
            </Row>
            <Row className="ContactRow">
                <Col>  taekionclubfirgas@hotmail.com  </Col>
            </Row>
            <Row className="ContactRow">
                <Col>
                <Image src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1730812770/Captura_de_pantalla_2024-11-05_131813_kzql8j.png" alt="ubicación en google maps"/>
                {/* <APIProvider apiKey={import.meta.env.GOOGLE_MAPS_API_KEY}>
                <div style={{ height: '100vh' }}>
                <Map zoom={9} center={position}></Map>
                </div>
                </APIProvider> */}
                </Col>
            </Row>

        </Container>
    )
}

export default ContactPage