import React, {useState, useRef} from 'react'
import axios from 'axios'
import {Formik} from 'formik'
import ReCAPTCHA from "react-google-recaptcha";
import ModalCorreo from '../ModalFormularioEnviado'
import {
    ContenedorFormulario,
    TituloFormulario,
    Formulario,
    FormLabel,
    MensajeError,
    FormName,
    FormMail,
    FormText,
    BotonEnviar,
} from '../FormularioEmail/FormElementos'

const FormEmail = () => {
    

    const [error, setError] = useState(null);
    const [sent, setSent] = useState(false);

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [html, setHtml ] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
            await axios.post('/api/mail', {to, subject, text, html})
            setSent(true);
            setError(null);
        }catch(err){
            setError(err.response.data)
        }
    }

    return (
        <ContenedorFormulario>
            <TituloFormulario>PARA MÁS INFORMACIÓN ENVÍANOS UN CORREO Y UNO DE 
                NUESTROS AGENTES DE VENTAS SE PONDRÁ EN CONTACTO LO MÁS PRONTO POSIBLE
            </TituloFormulario>

            <form onSubmit={handleSubmit}>
               <input value={to} onChange={(e) => setTo(e.target.value)}/>
               <input value={subject} onChange={(e) => setSubject(e.target.value)}/>
               <input value={text} onChange={(e) => setText(e.target.value)}/>
               <input value={html} onChange={(e) => setHtml(e.target.value)}/>
               <button type="submit">Submit</button>
            </form>
            {error && error}
            {sent && <p>Email sent!</p>}

        </ContenedorFormulario>
    )
}

export default FormEmail