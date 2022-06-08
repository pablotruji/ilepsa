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
            <TituloFormulario>
                FOR MORE INFORMATION SEND US AN EMAIL AND ONE OF
                OUR SALES AGENTS WILL CONTACT AS SOON AS POSSIBLE
            </TituloFormulario>

            <Formik 
                initialValues={{
                    nombre: '',
                    correo: '',
                    mensaje: '',
                }}    

                validate={(valores) =>{
                    let errores = {};

                    //Validación nombre

                    if(!valores.nombre){
                        errores.nombre ='Please enter a name'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'The name can only contain letters and spaces'
                    }

                    //Validación Correo

                    if(!valores.correo){
                        errores.correo ='Please enter an email'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'The email can only contain letters, numbers, periods, hyphens, and underscores'
                    }

                    //Validación mensaje

                    if(!valores.mensaje){
                        errores.mensaje ='Please enter a message'
                    }else if(valores.mensaje == "MENSAJE"){
                        errores.mensaje ='Please enter a message'
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
                            placeholder="NAME" 
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
                            placeholder="EMAIL" 
                            value={values.correo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.correo && errors.correo && <MensajeError>{errors.correo}</MensajeError>}

                        <FormText 
                            name="mensaje"
                            placeholder="MENSSAGE"
                            value={values.mensaje}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >    
                        </FormText>
                        {touched.mensaje && errors.mensaje && <MensajeError>{errors.mensaje}</MensajeError>}
                        
                            <ReCAPTCHA
                                ref={captcha}
                                /*LOCALHOST*/
                                /*  sitekey="6LcwZvkcAAAAALuB5kjorAjpE5b9qFFoDeQJ1JJR"*/
                                /*ILEPSA.COM*/
                                sitekey="6Lf93h0dAAAAAK64JmiCRu9TvxdxUmF9Jiij4xta"
                                onChange={onChange}
                                theme='dark'
                            />
                            {captchaValido === false && <MensajeError>Por favor acepta el captcha</MensajeError>}
                        <BotonEnviar type="submit" value="SEND"/>
                        {formularioEnviado && <ModalCorreo
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