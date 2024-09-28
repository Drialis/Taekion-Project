import { Container, Image } from "react-bootstrap"
import './Loader.css'

const Loader = () => {
  return (
<Container style={{display:'flex', justifyContent:'center'}}>
<Image src="https://res.cloudinary.com/du8mlfcf9/image/upload/v1727544199/Spinner_zzaiu2.png" className="Spinner"/>
</Container>

  )
}

export default Loader