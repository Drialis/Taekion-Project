import { Card, Container } from "react-bootstrap"
import CarouselHome from "../../components/CarouselHome/CarouselHome"
import Loader from '../../components/Loader/Loader'
import { useState } from "react"
import './HomePage.css'
import CarouselLegends from "../../components/CarouselLegends/CarouselLegends"

           //TO DO 
                //MODO OSCURO
                //Investigar cómo hacer el modo oscuro e implementarlo
                
                //CAROUSEL
                    //Hacer que el carousel ocupe todo el ancho de la pantalla aunque solo se vea una fracción de la imagen
                    //Hacer más pequeña la altura para que visualmente no ocupe tanto
                    //Subir imágenes de IA que impliquen ya un estilo

const HomePage = () => {

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
                LEYENDAS DE LA ESCUELA
            </h1>
            <CarouselLegends></CarouselLegends>    
            
                </>
            }

        </Container>
    )

}

export default HomePage