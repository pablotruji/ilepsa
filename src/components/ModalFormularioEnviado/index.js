import React from 'react'
import {
    ContenedorModalCorreo,
    ModalCorreoh2,
    Overlay,
    IcoMail,
    BotonCerrar,
    IcoCerrar,
    BotonAceptar
} from './FormularioEnviadoModalElementos'

const ModalCorreo = ({estado}) => {
    return (
        <>
            {estado && 
                <Overlay>
                    <ContenedorModalCorreo>
                        <ModalCorreoh2>CORREO ENVIADO EXITOSAMENTE</ModalCorreoh2>
                        <IcoMail/>
                    </ContenedorModalCorreo>
                </Overlay>
            }
        </>
    )
}


export default ModalCorreo