import AppRoutes from '../routes/AppRoutes'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import './App.css'
import { Container } from 'react-bootstrap'

const App = () => {
    return (

        <Container fluid className='App'>

            <Navigation />
            <AppRoutes />
            <Footer />

        </Container>
    )
}

export default App