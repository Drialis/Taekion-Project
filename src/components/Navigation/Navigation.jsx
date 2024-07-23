import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react'

const Navigation = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" className="Navbar align-items-center" expanded={expanded}>
            <Container className='ContainerNavbar'>
                <Navbar.Brand href="/" className="BrandTitle"><Image src="https://lh5.googleusercontent.com/proxy/TiEiPyR5XJiYmgn8shi964GCM958FnvcSnEWxyK2tI8ToE6PcU8T0eB94cgYFLIYE-ZrXzOhNhEYxUj-T8bYLm8lm27jrOeTOP4oqLN45TydU5U"></Image></Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="Navicon"
                    onClick={() => setExpanded(!expanded)}
                >
                    <img
                        src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1718363278/navicon_fdew9y.png"
                        alt="Nav icon"
                        className="NavIconImage"
                    />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto fixed-right">
                        <Link to="/projects" className="nav-link" onClick={() => setExpanded(false)}>
                            Blog
                        </Link>
                        <Link to="/it-tools" className="nav-link" onClick={() => setExpanded(false)}>
                            Noticias
                        </Link>
                        <Link to="/about-me" className="nav-link" onClick={() => setExpanded(false)}>
                            Espíritu de la escuela
                        </Link>
                        <Link to="/contact" className="nav-link" onClick={() => setExpanded(false)}>
                            Contacto
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Navigation