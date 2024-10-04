import { useState } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const [expanded, setExpanded] = useState(false);



    return (
        <Navbar expand="lg" className="Navigation align-items-center" expanded={expanded}>
            <Container fluid className='ContainerNavbar'>
                <Navbar.Brand href="/" className="BrandTitle"><Image src=""></Image></Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="Navigation"
                    onClick={() => setExpanded(!expanded)}
                >
                    <img
                        src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1728060848/Logo_Marca_Personal_Rojo_y_Rosa_1_uthkgy.png"
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
                        <Link to="/contact" className="nav-link" onClick={() => setExpanded(false)}>
                            <p>Contacto</p>                        
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
