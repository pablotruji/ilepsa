import React from 'react'

import {
            ContenedorBotones, 
            BotonSolicitaElProducto,
            IcoWs
} from './BotonSolicitaProductoElementos'

const BotonSolicitaProduc = () => {
    return (
        <ContenedorBotones>
            <BotonSolicitaElProducto href="https://api.whatsapp.com/send?phone=593983001791&text=Hola%2C%20quisiera%20tomar%20un%20TRAGUITO%2C%20me%20ayudas%20%F0%9F%A5%83" target="_blank">
                SOLICITA EL PRODUCTO <IcoWs/>
            </BotonSolicitaElProducto>
        </ContenedorBotones>
    )
}

export default BotonSolicitaProduc
