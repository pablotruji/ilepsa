import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import "./styles.css"
import "./logica"
import { useHistory } from 'react-router-dom';

const Prueba = () => {

    const history = useHistory();
    

    let numero = 18;
    const [datos, setDatos] = useState({
        fecha: '',
    })

    const handleInputChange = (event) => {
       // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();

    }


    return (
        <>
            <form onSubmit={enviarDatos}>
                
                <label htmlFor="fecha">Fecha de Nacimiento</label>
                <input 
                    id="fecha-nacimiento" 
                    type="number" 
                    name="fecha"
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
                
            </form>     
            {datos.fecha >= numero ? history.push('/productos'): 'f'}      
            <h1></h1>
        </>
        
    )
}

export default Prueba
