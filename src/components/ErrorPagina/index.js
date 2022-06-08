import React from 'react'

import {
    ContenedorErrorPagina,
    ContenedorPagina,
    Contenido,
    ContenedorBotones,
    BotonProductos,
    ContenedorImagen,
    ImagenLink
} from "./ErrorPaginaElementos"

import LogoIlepsa from '../../images/Logo_ILEPSA_Blanco.png'

const ErrorPagina = () => {
    return (
        <ContenedorErrorPagina>
            <ContenedorPagina>
                <Contenido>
                    <h2>ERROR 404</h2>
                    <h3>Página no encontrada</h3>
                    <h3>Page not found</h3>
                    <ContenedorBotones>
                        <BotonProductos to="/productos">Ver Productos</BotonProductos>
                        <BotonProductos to="/products">See Products</BotonProductos>
                    </ContenedorBotones>
                    <ContenedorImagen>
                        <ImagenLink to="/">
                        <img src={LogoIlepsa}/> 
                       </ImagenLink>
                    </ContenedorImagen>
                </Contenido>
            </ContenedorPagina>
        </ContenedorErrorPagina>
    )
}

export default ErrorPagina