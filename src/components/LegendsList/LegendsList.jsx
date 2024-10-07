import { Card, Col, Container, Row } from "react-bootstrap"
import Loader from "../Loader/Loader"
import { useState } from "react"

const LegendsList = () => {
    
    const [isLoading, setIsLoading] = useState()

    return (
        <div>
            {
                isLoading
                ?
                <Loader/>
                :
            <Container className="mt-3">
            <Row>
                <Col sm={{span: 4}} md={{span: 4}} lg={{span: 4}}>
                    <Card>
                        <Card.Title>
                            MIGUEL ÁNGEL SANTIAGO RUIZ
                        </Card.Title>
                        <Card.Img>

                        </Card.Img>
                        <Card.Text>
                            Maestro
                        </Card.Text>
                    </Card>
                </Col>
                <Col sm={{span: 3}}>
                    <Card>
                        <Card.Title>
                            JUAN CARLOS CABRERA
                        </Card.Title>
                        <Card.Img>

                        </Card.Img>
                        <Card.Text>
                            4º DAN
                        </Card.Text>
                    </Card>
                </Col>
                <Col sm={{span: 3}}>
                    <Card>
                        <Card.Title>
                            PALOMA REHECHO
                        </Card.Title>
                        <Card.Img>

                        </Card.Img>
                        <Card.Text>
                            Entrenadora 5º DAN
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
                        <Row className="mt-5">
                <Col sm={{span: 4}} md={{span: 4}} lg={{span: 4}}>
                    <Card>
                        <Card.Title>
                            PABLO CABEZA
                        </Card.Title>
                        <Card.Img>

                        </Card.Img>
                        <Card.Text>
                            1º DAN
                        </Card.Text>
                    </Card>
                </Col>
                <Col sm={{span: 3}}>
                    <Card>
                        <Card.Title>
                            MOISÉS 
                        </Card.Title>
                        <Card.Img>

                        </Card.Img>
                        <Card.Text>
                            5º DAN
                        </Card.Text>
                    </Card>
                </Col>
                <Col sm={{span: 3}}>
                    <Card>
                        <Card.Title>
                            PALOMA REHECHO
                        </Card.Title>
                        <Card.Img>

                        </Card.Img>
                        <Card.Text>
                            Entrenadora 5º DAN
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
            
        </Container>
        }
        </div>
    )
}

export default LegendsList