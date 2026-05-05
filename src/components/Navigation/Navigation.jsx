import { useState } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" className="Navigation" expanded={expanded}>
            <Container fluid className="NavContainer">
                <Navbar.Brand href="/" className="BrandTitle">
                    <Image src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1777834955/Dise%C3%B1o_sin_t%C3%ADtulo_6_vcrttm.png"></Image>
                </Navbar.Brand>
                <Navbar.Text className='NavSlogan'>
                <p className='NavSloganSmall'>Abriendo camino</p>
                <h1 className='NavSloganBig'>STEP BY STEP</h1>
                </Navbar.Text>

                <div className='NavMenu'>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="NavMenu"
                    onClick={() => setExpanded(!expanded)}
                    >
                    <img
                        src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1777830741/clipart3518256_lvruie.png"
                        alt="Nav icon"
                        className="NavIconImage"
                        />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto fixed-right">
                        <Link to="/blog" className="nav-link" onClick={() => setExpanded(false)}>
                            <p>Blog</p>
                        </Link>
                        <Link to="/signup" className="nav-link" onClick={() => setExpanded(false)}>
                            <p>Acceso Alumnos</p>                        
                        </Link>
                        <Link to="/leyendas-de-la-escuela" className="nav-link" onClick={() => setExpanded(false)}>
                            <p>Leyendas de la escuela</p>
                        </Link>
                        <Link to="/contacto" className="nav-link" onClick={() => setExpanded(false)}>
                            <p>Contacto</p>                        
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                        </div>
                </Container>
        </Navbar>
    );
};

export default Navigation;
