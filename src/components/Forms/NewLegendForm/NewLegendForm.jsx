import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "react-bootstrap"
import './NewLegendForm.css'  

const NewLegendForm = () => {

    const navigate = useNavigate()

    const [legendData, setLegendData] = useState({
        name: '',
        mainText: '',
        paragraphs:[],
        images: [],
        isCompetitor: false,
        dateDan: ''
    })

    const handleInputChange = event => {
        const {name, value} = event.target 
        setLegendData({
            ...legendData,
            [name]: value
        })
    }

const handleLegendForSubmit = async (e) => {

    e.preventDefault()

    try{
        const response = await fetch('http://localhost:3000/legends',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(legendData)
        })

        if (response.ok){
            navigate('/legends')
        }else {
            console.log('Error al aplicar la leyenda')
        }
    }catch (error){
        console.error('Error al añadir la nueva leyenda', error)
    }
}


return (
<Form className="NewLegendForm" onSubmit={handleLegendForSubmit}>
    <Form.Group>
        <Form.Label>Nombre y apellidos de la nueva leyenda</Form.Label>
        <Form.Control 
        placeholder="Miguel Ángel Santiago Ruiz" 
        name="name" 
        value={legendData.name} 
        onChange={handleInputChange} 
        required/>
    </Form.Group>

</Form>

)
}

export default NewLegendForm