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
            <Container >
            <Row>
                <Col sm={{span: 3, offset: 3}}>
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
                <Col>
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
                <Col>
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
            </Row>
        </Container>
        }
        </div>
    )
}

export default LegendsList