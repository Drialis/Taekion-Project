import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {


  return (
    <Carousel>
      <Carousel.Item interval={20000}>
        <Image src='https://res.cloudinary.com/du8mlfcf9/image/upload/v1717665995/Cabecera-desktop-Las-Canteras_0_pe0r9n.jpg'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={10000}>
        <Image src='https://res.cloudinary.com/du8mlfcf9/image/upload/v1717688232/airlie_beach_2_gdlagk.jpg'/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={10000}>
        <Image src='https://res.cloudinary.com/du8mlfcf9/image/upload/v1717346011/i6bcuf1wylefaygo8os6.jpg'/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default CarouselHome;