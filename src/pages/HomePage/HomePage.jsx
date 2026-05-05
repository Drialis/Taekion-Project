import { Container } from "react-bootstrap"
import Loader from '../../components/Loader/Loader.jsx'
import { useState } from "react"
import './HomePage.css'
import CarouselLegends from'../../components/CarouselLegends/CarouselLegends.jsx'
           //TO DO 
                //MODO CLARO
                //Investigar cómo hacer el ESTADO DE REACT para hacer ambos modos e implementarlo
                //NAVIGATION 
                //En caso de no estar el navicon el menú no tendrá fondo y será pequeño
                //hacer responsive los textos
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
        <Container className="HomePage">
            {
                isLoading
                ?
                <Loader/>
                :
                <>
            <h1 className="HomeTitle fs-1 fw-5">
                LEYENDAS DE LA ESCUELA
            </h1>
           <CarouselLegends/> 
                </>
            }

        </Container>
    )

}

export default HomePage