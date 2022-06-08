import React from 'react'

import {
            ContenedorBotones, 
            BotonSolicitaElProducto,
            IcoWs
} from './BotonSolicitaProductoElementos'

const BotonSolicitaProduc = () => {
    return (
        <ContenedorBotones>
            <BotonSolicitaElProducto href="https://wa.me/593983001791?text=Hello%20ILEPSA,%20please%20help%20me%20with:" target="_blank">
                REQUEST THE PRODUCT <IcoWs/>
            </BotonSolicitaElProducto>
        </ContenedorBotones>
    )
}

export default BotonSolicitaProduc
