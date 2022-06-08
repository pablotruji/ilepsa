import React from 'react'
import {
    ContenedorModalPenitencia,
    ModalPenitenciah2,
    Overlay,
    BotonCerrar,
    IcoCerrar,
    BotonAceptar
} from './ModalPenitenciaElementos'

const ModalPenitencia = ({children, estado, cambiarEstado}) => {
    return (
        <>
            {estado && 
                <Overlay>
                    <ContenedorModalPenitencia>
                        <ModalPenitenciah2>Penitencia</ModalPenitenciah2>
                        <BotonCerrar onClick={()=> cambiarEstado(false)}><IcoCerrar/></BotonCerrar>
                        {children}
                        <BotonAceptar onClick={()=> cambiarEstado(false)}>Aceptar</BotonAceptar>
                    </ContenedorModalPenitencia>
                </Overlay>
            }
        </>
    )
}


export default ModalPenitencia
