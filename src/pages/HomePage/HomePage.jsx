import { Card, Container } from "react-bootstrap"
import CarouselHome from "../../components/CarouselHome/CarouselHome"
import Loader from '../../components/Loader/Loader'
import { useState } from "react"

const Homepage = () => {

    //pasar a true en caso de querer activar el useEffect
    const [isLoading, setIsLoading] = useState(false)


    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             await new Promise((resolve) => setTimeout(resolve, 1000));
    //             setIsLoading(false); 
    //         } catch (error) {
    //             console.error('Error cargando datos:', error);
    //             setIsLoading(false); 
    //         }
    //     };
    //     loadData();
    // }, []);

    return (
        <Container className="Homepage g-0">
            {
                isLoading
                ?
                <Loader/>
                :
                <>
                <Card>
                <Card.Text>
                    TAEKION FIRGAS
                </Card.Text>
            </Card>
            <CarouselHome className="CarouselHome"/>
                </>
            }

        </Container>
    )

}

export default Homepage