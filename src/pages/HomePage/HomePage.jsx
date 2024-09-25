import { Card, Container } from "react-bootstrap"
import CarouselHome from "../../components/CarouselHome/CarouselHome"

const Homepage = () => {

    return (
        <Container fluid className="Homepage g-0">
            <Card>
                <Card.Text>
                    <p>TAEKION FIRGAS</p>
                </Card.Text>
            </Card>
            <CarouselHome/>
        </Container>
    )

}

export default Homepage