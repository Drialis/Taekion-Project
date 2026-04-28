import { Card, Container } from "react-bootstrap"
import CarouselHome from "../../components/CarouselHome/CarouselHome"
import Loader from '../../components/Loader/Loader'
import { useState } from "react"
import './HomePage.css'

           //TO DO 
                //MODO OSCURO
                //Investigar cómo hacer el modo oscuro e implementarlo
                
                //CAROUSSEL
                    //Hacer que el carousel ocupe todo el ancho de la pantalla aunque solo se vea una fracción de la imagen
                    //Hacer más pequeña la altura para que visualmente no ocupe tanto
                    //Subir imágenes de IA que impliquen ya un estilo

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
        <Container>
            {
                isLoading
                ?
                <Loader/>
                :
                <>
            <h1 className="HomeTitle fs-1 fw-5">
                TAEKION FIRGAS
            </h1>
           


            <CarouselHome className="CarouselHome align-items-center"/>
                </>
            }

        </Container>
    )

}

export default Homepage