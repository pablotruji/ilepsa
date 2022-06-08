import React, {useState, useRef} from 'react'
import {Formik} from 'formik'
import emailjs from 'emailjs-com'
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
} from './FormElementos'

const FormEmail = () => {
    const form = useRef();
    const captcha = useRef(null);

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    const [estadoModal, cambiarEstadoModal] = useState(true);

    const [captchaValido, cambiarCaptchValido] = useState(null)

    const onChange = () => {
        if(captcha.current.getValue()){
            console.log('El usuario no es un Robot')
            cambiarCaptchValido(true)
        }
    }

    return (
        <ContenedorFormulario>
            <TituloFormulario>PARA MÁS INFORMACIÓN ENVÍANOS UN CORREO Y UNO DE 
                NUESTROS AGENTES DE VENTAS SE PONDRÁ EN CONTACTO LO MÁS PRONTO POSIBLE
            </TituloFormulario>

            <Formik 
                initialValues={{
                    nombre: '',
                    correo: '',
                    mensaje: '',
                }}    

                validate={(valores) =>{
                    let errores = {};

                    //VAlidación nombre

                    if(!valores.nombre){
                        errores.nombre ='Por favor, ingresa un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    //VAlidación Correo

                    if(!valores.correo){
                        errores.correo ='Por favor, ingresa un correo electrónico'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo'
                    }

                    //Validación mensaje

                    if(!valores.mensaje){
                        errores.mensaje ='Por favor, ingresa un mensaje'
                    }else if(valores.mensaje == "MENSAJE"){
                        errores.mensaje ='Por favor, ingresa un mensaje'
                    }

                    return errores;
                    
                }}

                onSubmit={(valores, {resetForm}) => {
                    if(captcha.current.getValue()){
                        cambiarFormularioEnviado(true);
                        setTimeout(()=> cambiarFormularioEnviado(false),4000);
                        cambiarCaptchValido(true)
                        captcha.current.reset()
                        emailjs.sendForm(
                            'service_6zmvnt8', 
                            'template_rbdi8zh', 
                            form.current,
                            'user_cANKl1GJjenptIqIx3Lvw')
                            .then((result) => {
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            });
                        resetForm();
                    }else{
                        cambiarFormularioEnviado(false);
                        cambiarCaptchValido(false)
                    }
                }}
            >
                {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                     <Formulario ref={form} onSubmit={handleSubmit}>
                        <label htmlFor="nombre"></label>
                        <FormName 
                            name="nombre" 
                            type="text" 
                            placeholder="NOMBRE" 
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {}
                        {touched.nombre && errors.nombre && <MensajeError>{errors.nombre}</MensajeError>}
    
                        <label htmlFor="correo"></label>
                        <FormMail 
                            name="correo"
                            type="email" 
                            placeholder="CORREO" 
                            value={values.correo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.correo && errors.correo && <MensajeError>{errors.correo}</MensajeError>}

                        <FormText 
                            name="mensaje"
                            placeholder="MENSAJE"
                            value={values.mensaje}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >    
                        </FormText>
                        {touched.mensaje && errors.mensaje && <MensajeError>{errors.mensaje}</MensajeError>}
                        
                            <ReCAPTCHA
                                ref={captcha}
                                /*LOCALHOST*/
                                /*sitekey="6LcwZvkcAAAAALuB5kjorAjpE5b9qFFoDeQJ1JJR"*/
                                /*ILEPSA.COM*/
                                sitekey="6Lf93h0dAAAAAK64JmiCRu9TvxdxUmF9Jiij4xta"
                                onChange={onChange}
                                theme='dark'
                            />
                            {captchaValido === false && <MensajeError>Por favor acepta el captcha</MensajeError>}
                        <BotonEnviar type="submit" value="ENVIAR"/>
                        
                        {formularioEnviado && 
                        <ModalCorreo
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal}
                        />}
                    </Formulario>
                )}
               
            </Formik>
        </ContenedorFormulario>
    )
}

export default FormEmail