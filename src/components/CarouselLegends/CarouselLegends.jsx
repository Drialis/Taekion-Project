import { Container, Carousel } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import './CarouselLegends.css'
import LegendsList from '../LegendsList/LegendsList'
import LegendsCard from '../LegendsCard/LegendsCard'

const CarouselLegends = () => {

    return (
        <Container>
            {
                isLoading
                ?
                <Loader/>
                :
                <>
                <h1>
PROBANDO EL CAROUSEL
                </h1>
                <Carousel>
                 <Carousel.Item interval={20000}>
                    <LegendsCard></LegendsCard>

                  </Carousel.Item>
                </Carousel>
                
                </>
            }
        </Container>
    )

}

export default CarouselLegends
