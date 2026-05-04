import { Container, Carousel, Card } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import './CarouselLegends.css'
import { useEffect, useState } from 'react'


const CarouselLegends = () => {

  const [legends, setLegends] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/legends.json")
    .then(res => res.json())
    .then(
      data => {setLegends(data)
               setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
      })
  }, [])


    return (
        <Container>
            {
                isLoading
                ?
                <Loader/>
                :
                <>
                <Carousel className='carouselHomeLegends'>
                  {legends.map(legend => (
                    <Carousel.Item key={legend.id}>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            {legend.name}
                          </Card.Title>
                          <Card.Img>
                            {legend.mainImage}
                          </Card.Img>
                          <Card.Text>
                            {legend.category}
                          </Card.Text>
            
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                  ))
                  }
                </Carousel>
                </>
            }
        </Container>
    )

}

export default CarouselLegends
